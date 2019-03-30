module.exports = {
    "builtins": {
        "Map": "Map",
        "Set": "Set",
        "WeakMap": "WeakMap",
        "WeakSet": "WeakSet",
        "AudioContext": "AudioContext",
        "Blob": "Blob",
        "CustomEvent": "CustomEvent",
        "DOMTokenList": "DOMTokenList",
        "DocumentFragment": "DocumentFragment",
        "Element": "Element",
        "Event": "Event",
        "EventSource": "EventSource",
        "HTMLDocument": "HTMLDocument",
        "HTMLPictureElement": "HTMLPictureElement",
        "IntersectionObserver": "IntersectionObserver",
        "IntersectionObserverEntry": "IntersectionObserverEntry",
        "JSON": "JSON",
        "MutationObserver": "MutationObserver",
        "Promise": "Promise",
        "Symbol": "Symbol",
        "URL": "URL",
        "UserTiming": "UserTiming",
        "WebAnimations": "WebAnimations",
        "Window": "Window",
        "XMLHttpRequest": "XMLHttpRequest",
        "_ArrayIterator": "_ArrayIterator",
        "_DOMTokenList": "_DOMTokenList",
        "_Iterator": "_Iterator",
        "_StringIterator": "_StringIterator",
        "_TypedArray": "_TypedArray",
        "_mutation": "_mutation",
        "atob": "atob",
        "console": "console",
        "devicePixelRatio": "devicePixelRatio",
        "document": "document",
        "fetch": "fetch",
        "getComputedStyle": "getComputedStyle",
        "localStorage": "localStorage",
        "matchMedia": "matchMedia",
        "requestAnimationFrame": "requestAnimationFrame",
        "setImmediate": "setImmediate",
        "~html5-elements": "~html5-elements",
        "~viewport": "~viewport"
    },
    "instanceMethods": {
        "entries": [
            "Array.prototype.@@iterator",
            "Array.prototype.entries",
            "Array.prototype.keys",
            "Array.prototype.values"
        ],
        "keys": [
            "Array.prototype.@@iterator",
            "Array.prototype.entries",
            "Array.prototype.keys",
            "Array.prototype.values"
        ],
        "values": [
            "Array.prototype.@@iterator",
            "Array.prototype.entries",
            "Array.prototype.keys",
            "Array.prototype.values"
        ],
        "@@iterator": [
            "Array.prototype.@@iterator",
            "DOMTokenList.prototype.@@iterator",
            "NodeList.prototype.@@iterator",
            "String.prototype.@@iterator"
        ],
        "copyWithin": [
            "Array.prototype.copyWithin"
        ],
        "every": [
            "Array.prototype.every"
        ],
        "fill": [
            "Array.prototype.fill"
        ],
        "filter": [
            "Array.prototype.filter"
        ],
        "find": [
            "Array.prototype.find"
        ],
        "findIndex": [
            "Array.prototype.findIndex"
        ],
        "flat": [
            "Array.prototype.flat"
        ],
        "flatMap": [
            "Array.prototype.flatMap"
        ],
        "forEach": [
            "Array.prototype.forEach",
            "NodeList.prototype.forEach"
        ],
        "includes": [
            "Array.prototype.includes",
            "String.prototype.includes"
        ],
        "indexOf": [
            "Array.prototype.indexOf"
        ],
        "lastIndexOf": [
            "Array.prototype.lastIndexOf"
        ],
        "map": [
            "Array.prototype.map"
        ],
        "reduce": [
            "Array.prototype.reduce"
        ],
        "reduceRight": [
            "Array.prototype.reduceRight"
        ],
        "some": [
            "Array.prototype.some"
        ],
        "toISOString": [
            "Date.prototype.toISOString"
        ],
        "append": [
            "DocumentFragment.prototype.append",
            "Element.prototype.append"
        ],
        "prepend": [
            "DocumentFragment.prototype.prepend",
            "Element.prototype.prepend"
        ],
        "after": [
            "Element.prototype.after"
        ],
        "before": [
            "Element.prototype.before"
        ],
        "classList": [
            "Element.prototype.classList"
        ],
        "cloneNode": [
            "Element.prototype.cloneNode"
        ],
        "closest": [
            "Element.prototype.closest"
        ],
        "dataset": [
            "Element.prototype.dataset"
        ],
        "matches": [
            "Element.prototype.matches"
        ],
        "placeholder": [
            "Element.prototype.placeholder"
        ],
        "remove": [
            "Element.prototype.remove"
        ],
        "replaceWith": [
            "Element.prototype.replaceWith"
        ],
        "bind": [
            "Function.prototype.bind"
        ],
        "name": [
            "Function.prototype.name"
        ],
        "toBlob": [
            "HTMLCanvasElement.prototype.toBlob"
        ],
        "contains": [
            "Node.prototype.contains"
        ],
        "finally": [
            "Promise.prototype.finally"
        ],
        "flags": [
            "RegExp.prototype.flags"
        ],
        "codePointAt": [
            "String.prototype.codePointAt"
        ],
        "endsWith": [
            "String.prototype.endsWith"
        ],
        "padEnd": [
            "String.prototype.padEnd"
        ],
        "padStart": [
            "String.prototype.padStart"
        ],
        "repeat": [
            "String.prototype.repeat"
        ],
        "startsWith": [
            "String.prototype.startsWith"
        ],
        "trim": [
            "String.prototype.trim"
        ]
    },
    "staticMethods": {
        "Promise": {
            "all": [
                "String.prototype.@@iterator",
                "Array.prototype.@@iterator"
            ],
            "race": [
                "String.prototype.@@iterator",
                "Array.prototype.@@iterator"
            ]
        },
        "Array": {
            "from": "Array.from",
            "isArray": "Array.isArray",
            "of": "Array.of"
        },
        "Date": {
            "now": "Date.now"
        },
        "Event": {
            "focusin": "Event.focusin",
            "hashchange": "Event.hashchange"
        },
        "Math": {
            "acosh": "Math.acosh",
            "asinh": "Math.asinh",
            "atanh": "Math.atanh",
            "cbrt": "Math.cbrt",
            "clz32": "Math.clz32",
            "cosh": "Math.cosh",
            "expm1": "Math.expm1",
            "fround": "Math.fround",
            "hypot": "Math.hypot",
            "imul": "Math.imul",
            "log10": "Math.log10",
            "log1p": "Math.log1p",
            "log2": "Math.log2",
            "sign": "Math.sign",
            "sinh": "Math.sinh",
            "tanh": "Math.tanh",
            "trunc": "Math.trunc"
        },
        "Number": {
            "Epsilon": "Number.Epsilon",
            "MAX_SAFE_INTEGER": "Number.MAX_SAFE_INTEGER",
            "MIN_SAFE_INTEGER": "Number.MIN_SAFE_INTEGER",
            "isFinite": "Number.isFinite",
            "isInteger": "Number.isInteger",
            "isNaN": "Number.isNaN",
            "isSafeInteger": "Number.isSafeInteger",
            "parseFloat": "Number.parseFloat",
            "parseInt": "Number.parseInt"
        },
        "Object": {
            "assign": "Object.assign",
            "create": "Object.create",
            "defineProperties": "Object.defineProperties",
            "defineProperty": "Object.defineProperty",
            "entries": "Object.entries",
            "freeze": "Object.freeze",
            "getOwnPropertyDescriptor": "Object.getOwnPropertyDescriptor",
            "getOwnPropertyNames": "Object.getOwnPropertyNames",
            "getPrototypeOf": "Object.getPrototypeOf",
            "is": "Object.is",
            "isExtensible": "Object.isExtensible",
            "isFrozen": "Object.isFrozen",
            "isSealed": "Object.isSealed",
            "keys": "Object.keys",
            "preventExtensions": "Object.preventExtensions",
            "seal": "Object.seal",
            "setPrototypeOf": "Object.setPrototypeOf",
            "values": "Object.values"
        },
        "String": {
            "fromCodePoint": "String.fromCodePoint"
        },
        "Symbol": {
            "hasInstance": "Symbol.hasInstance",
            "isConcatSpreadable": "Symbol.isConcatSpreadable",
            "iterator": "Symbol.iterator",
            "match": "Symbol.match",
            "replace": "Symbol.replace",
            "search": "Symbol.search",
            "species": "Symbol.species",
            "split": "Symbol.split",
            "toPrimitive": "Symbol.toPrimitive",
            "toStringTag": "Symbol.toStringTag",
            "unscopables": "Symbol.unscopables"
        },
        "_ESAbstract": {
            "ArrayCreate": "_ESAbstract.ArrayCreate",
            "ArraySpeciesCreate": "_ESAbstract.ArraySpeciesCreate",
            "Call": "_ESAbstract.Call",
            "CanonicalNumericIndexString": "_ESAbstract.CanonicalNumericIndexString",
            "Construct": "_ESAbstract.Construct",
            "CreateDataProperty": "_ESAbstract.CreateDataProperty",
            "CreateDataPropertyOrThrow": "_ESAbstract.CreateDataPropertyOrThrow",
            "CreateIterResultObject": "_ESAbstract.CreateIterResultObject",
            "CreateMethodProperty": "_ESAbstract.CreateMethodProperty",
            "EnumerableOwnProperties": "_ESAbstract.EnumerableOwnProperties",
            "FlattenIntoArray": "_ESAbstract.FlattenIntoArray",
            "Get": "_ESAbstract.Get",
            "GetIterator": "_ESAbstract.GetIterator",
            "GetMethod": "_ESAbstract.GetMethod",
            "GetPrototypeFromConstructor": "_ESAbstract.GetPrototypeFromConstructor",
            "GetV": "_ESAbstract.GetV",
            "HasOwnProperty": "_ESAbstract.HasOwnProperty",
            "HasProperty": "_ESAbstract.HasProperty",
            "Invoke": "_ESAbstract.Invoke",
            "IsArray": "_ESAbstract.IsArray",
            "IsCallable": "_ESAbstract.IsCallable",
            "IsConstructor": "_ESAbstract.IsConstructor",
            "IsInteger": "_ESAbstract.IsInteger",
            "IsPropertyKey": "_ESAbstract.IsPropertyKey",
            "IsRegExp": "_ESAbstract.IsRegExp",
            "IteratorClose": "_ESAbstract.IteratorClose",
            "IteratorComplete": "_ESAbstract.IteratorComplete",
            "IteratorNext": "_ESAbstract.IteratorNext",
            "IteratorStep": "_ESAbstract.IteratorStep",
            "IteratorValue": "_ESAbstract.IteratorValue",
            "OrdinaryCreateFromConstructor": "_ESAbstract.OrdinaryCreateFromConstructor",
            "OrdinaryToPrimitive": "_ESAbstract.OrdinaryToPrimitive",
            "RequireObjectCoercible": "_ESAbstract.RequireObjectCoercible",
            "SameValue": "_ESAbstract.SameValue",
            "SameValueNonNumber": "_ESAbstract.SameValueNonNumber",
            "SameValueZero": "_ESAbstract.SameValueZero",
            "SpeciesConstructor": "_ESAbstract.SpeciesConstructor",
            "ToBoolean": "_ESAbstract.ToBoolean",
            "ToIndex": "_ESAbstract.ToIndex",
            "ToInt16": "_ESAbstract.ToInt16",
            "ToInt32": "_ESAbstract.ToInt32",
            "ToInt8": "_ESAbstract.ToInt8",
            "ToInteger": "_ESAbstract.ToInteger",
            "ToLength": "_ESAbstract.ToLength",
            "ToNumber": "_ESAbstract.ToNumber",
            "ToObject": "_ESAbstract.ToObject",
            "ToPrimitive": "_ESAbstract.ToPrimitive",
            "ToPropertyKey": "_ESAbstract.ToPropertyKey",
            "ToString": "_ESAbstract.ToString",
            "ToUint16": "_ESAbstract.ToUint16",
            "ToUint32": "_ESAbstract.ToUint32",
            "ToUint8": "_ESAbstract.ToUint8",
            "ToUint8Clamp": "_ESAbstract.ToUint8Clamp",
            "Type": "_ESAbstract.Type",
            "UTF16Decode": "_ESAbstract.UTF16Decode",
            "UTF16Encoding": "_ESAbstract.UTF16Encoding"
        },
        "console": {
            "assert": "console.assert",
            "clear": "console.clear",
            "count": "console.count",
            "debug": "console.debug",
            "dir": "console.dir",
            "dirxml": "console.dirxml",
            "error": "console.error",
            "exception": "console.exception",
            "group": "console.group",
            "groupCollapsed": "console.groupCollapsed",
            "groupEnd": "console.groupEnd",
            "info": "console.info",
            "log": "console.log",
            "markTimeline": "console.markTimeline",
            "profile": "console.profile",
            "profileEnd": "console.profileEnd",
            "profiles": "console.profiles",
            "table": "console.table",
            "time": "console.time",
            "timeEnd": "console.timeEnd",
            "timeStamp": "console.timeStamp",
            "timeline": "console.timeline",
            "timelineEnd": "console.timelineEnd",
            "trace": "console.trace",
            "warn": "console.warn"
        },
        "document": {
            "currentScript": "document.currentScript",
            "getElementsByClassName": "document.getElementsByClassName",
            "head": "document.head",
            "querySelector": "document.querySelector",
            "visibilityState": "document.visibilityState"
        },
        "location": {
            "origin": "location.origin"
        },
        "navigator": {
            "geolocation": "navigator.geolocation",
            "sendBeacon": "navigator.sendBeacon"
        },
        "performance": {
            "now": "performance.now"
        },
        "screen": {
            "orientation": "screen.orientation"
        }
    }
};