
export default function createExport(rootDir: Path, opt: {exclude: Array<string>}): void;

declare Entries = {
  [string]: string
}

export function findModuleEntry(rootDir: Path, opt: {exclude: Array<string>}): Promise<Entries>