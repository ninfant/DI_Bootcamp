"use strict";
// const allowedTypes: string[] could be something like: ["string", "number", "boolean"];
function validateUnionType(value, allowedTypes) {
    const valueType = typeof value;
    return allowedTypes.includes(valueType);
}
console.log(validateUnionType(true, ["boolean", "object"]));
console.log(validateUnionType(null, ["object"]));
console.log(validateUnionType(3, ["boolean"]));
