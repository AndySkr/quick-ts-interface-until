/** @format */

const config = {
  options: {
    lang: "TypeScript",
    inferMaps: true,
    inferEnums: true,
    inferUuids: true,
    inferDateTimes: true,
    inferIntegerStrings: true,
    inferBooleanStrings: true,
    combineClasses: true,
    ignoreJsonRefs: true,
    allPropertiesOptional: false,
    rendererOptions: {
      "just-types": true,
      "nice-property-names": false,
      "explicit-unions": false,
      "runtime-typecheck": false,
      "acronym-style": "lowerCase",
      converters: "all-objects",
    },
    fixedTopLevels: false,
  },
  sourceType: "JSON",
  sources: [],
};
