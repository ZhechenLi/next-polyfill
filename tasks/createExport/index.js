let fs = require('fs-extra');
let path = require('path');
let parse = require('@babel/parser').parse;
let traverse = require('@babel/traverse').default;
let t = require('@babel/types');
let generate = require('@babel/generator');
let babel = require('@babel/core');

module.exports = createExport;

function getIdentifier(node) {
  if (t.isDeclaration(node)) {
    return getIdentifierNameFromDeclaration(node);
  }

  if (Array.isArray(node) && node.every(node => t.isExportSpecifier(node))) {
    return getIdentifierNameFromExportSpecifier(node);
  }
  return null;
}

function getIdentifierNameFromExportSpecifier(node) {
  if (Array.isArray(node) && node.some(node => !t.isExportSpecifier(node))) {
    throw new Error('Node is not vaild ExportSpecifier');
  }
  return node.map(specifier => specifier.exported.name);

  // only two type of declaration if doesn't go wrong
}

function getIdentifierNameFromDeclaration(node) {
  if (!t.isDeclaration(node)) {
    throw new Error('Node is not vaild declaration');
  }

  if (t.isFunctionDeclaration(node)) {
    return [node.id.name];
  }

  if (t.isVariableDeclaration(node)) {
    return node.declarations.map(declarator => declarator.id.name);
  }

  throw new Error('Node is not vaild declaration');

  // only two type of declaration if doesn't go wrong
}

async function findModuleEntry(rootDir = process.cwd(), opt = {}) {
  let entry = {};
  const { exclude = [] } = opt;

  if (!(await fs.statSync(rootDir).isDirectory())) {
    return {
      [path.parse(rootDir).base]: rootDir
    };
  }
  let dir = await fs.readdir(rootDir);

  // TODO: ignore index.* and *test*
  dir = dir.filter(
    e => !exclude.includes(e) && !e.match(/^index/) && !e.match(/\.test\./)
  );

  dir.forEach(async e => {
    let curDir = path.join(rootDir, e);
    if (fs.statSync(curDir).isDirectory()) {
      let entryDirs = await fs
        .readdirSync(curDir)
        .filter(e => e.match(/^index/));
      if (entryDirs.length > 1) {
        console.warn(
          `Multipy entry has detect, will used ${
            entryDirs[0]
          } from ${entryDirs}`
        );
      }
      entry[e] = path.join(curDir, entryDirs[0]);
    } else {
      entry[e] = curDir;
    }
  });
  return entry;
}

async function createExport(rootDir = process.cwd(), opt = { exclude: [] }) {
  const entries = await findModuleEntry(rootDir, opt);

  let compilation = {};

  Object.entries(entries).forEach(([moduleName, moduleDir]) => {
    const code = fs.readFileSync(moduleDir).toString();
    const ast = parse(code, { sourceType: 'module', plugins: ['typescript'] });

    const state = {
      moduleDir,
      nameMdoule: [],
      hasDefaultImport: false
    };
    traverse(ast, {
      enter(path) {},
      ExportDefaultDeclaration(path) {
        state.hasDefaultImport = true;
      },
      ExportNamedDeclaration(path) {
        // Note: Having declaration populated with non-empty specifiers or non-null source results in an invalid state.
        const id = getIdentifier(path.node.declaration || path.node.specifiers);
        state.nameMdoule = state.nameMdoule.concat(id);
      }
    });
    compilation[moduleName] = state;
  });

  // generate export code
  return Object.entries(compilation)
    .map(([moduleName, state]) => {
      const ast = t.program([
        t.ExportNamedDeclaration(
          null,
          [
            t.exportSpecifier(
              t.identifier('default'),
              t.identifier(path.parse(moduleName).name)
            ),
            ...state.nameMdoule.map(e =>
              t.exportSpecifier(t.identifier(e), t.identifier(e))
            )
          ],
          t.StringLiteral(
            /** ts will Implicit when souce has a extname */
            `./${removeExt(path.relative(rootDir, state.moduleDir))}`
          )
        )
      ]);

      // convert path relative to rootDir
      return babel.transformFromAstSync(ast).code;
    })
    .join('\n');
}

// path/to/a.js => path/to/a
function removeExt(sourcePath) {
  let { dir, name } = path.parse(sourcePath);
  return dir + name;
}
