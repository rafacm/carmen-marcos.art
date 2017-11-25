"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assembleQueries = exports.constructTypeQuery = exports.surroundWithBraces = exports.extractTypeName = exports.formatTypeName = undefined;

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// If type ends in a non-vowel, we need to append es. Else s.
var formatTypeName = exports.formatTypeName = function formatTypeName(t) {
  return "all" + t + (/s$/.test(t) ? "es" : "s");
};

// Get the type name back from a formatted type name.
var extractTypeName = exports.extractTypeName = function extractTypeName(t) {
  return (/all(.+(?:s|es))/gi.exec(t)[1]
  );
};

// Create the query body
var surroundWithBraces = exports.surroundWithBraces = function surroundWithBraces(c) {
  return "{" + c + "}";
};

// Constructs a query for a given type.
var constructTypeQuery = exports.constructTypeQuery = function constructTypeQuery(type) {
  return "\n  " + formatTypeName(type.name) + " {\n    " + _ramda2.default.compose(_ramda2.default.join("\n"), _ramda2.default.pluck("name"))(type.fields) + "\n  }\n";
};

// Composition which assembles the query to fetch all data.
var assembleQueries = exports.assembleQueries = _ramda2.default.compose(surroundWithBraces, _ramda2.default.join("\n"), _ramda2.default.map(constructTypeQuery), _ramda2.default.path(["__type", "possibleTypes"]));