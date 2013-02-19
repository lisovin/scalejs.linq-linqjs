/*global define,describe,expect,it*/
/*jslint sloppy: true*/
/// <reference path="../Scripts/jasmine.js"/>
define([
    'scalejs!core'
], function (core) {
    describe('`linq` core extension', function () {
        it('is defined', function () {
            expect(core.linq).toBeDefined();
        });
    });
});