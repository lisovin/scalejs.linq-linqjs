/// <reference path="../Scripts/require.js"/>
/// <reference path="../Scripts/jasmine.js"/>

/*global requirejs*/
requirejs({
    paths: {
        'scalejs' : '../Scripts/scalejs-0.1.1',
        'linq' : '../Scripts/linq'
    }
}, ['../test/all.tests']);
