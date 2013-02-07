/*global require*/
/// <reference path="Scripts/require.js"/>
/// <reference path="Scripts/jasmine.js"/>
require({
    "paths":  {
        "linq":  "Scripts/linq",
        "scalejs":  "Scripts/scalejs-0.2.0",
        "scalejs.linq":  "../scalejs.linq/build/scalejs.linq-0.2.0"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.linq"
        ]
    },
    "shim":  {
        "linq":  {
            "exports":  "Enumerable"
        }
    }
}, ['tests/all.tests']);
