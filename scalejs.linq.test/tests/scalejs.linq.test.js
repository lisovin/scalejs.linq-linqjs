/*global define,describe,expect,it*/
/*jslint sloppy: true*/
/// <reference path="../Scripts/jasmine.js"/>
define([
    'scalejs!core',
    'scalejs!application'
], function (core) {
    var linq = core.linq;

    describe('scalejs.linq extension', function () {
        it('is defined', function () {
            expect(linq).toBeDefined();
            expect(linq.enumerable).toBeDefined();
        });
    });
});