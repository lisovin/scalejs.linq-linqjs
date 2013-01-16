/*global define,describe,expect,it*/
/*jslint sloppy: true*/
/// <reference path="../Scripts/jasmine.js"/>
define([
    'scalejs!core',
    'scalejs!application'
], function (core) {
    var linq = core.linq;

    describe('enumerable', function () {
        it('`from` creates enumerable', function () {
            var e = linq.enumerable.from([1, 5, 3, 10]);
            expect(e).toBeDefined();
        });

        it('`toArray` returns array', function () {
            var source = [1, 5, 3, 10]
            expect(linq.enumerable.from(source).toArray()).toEqual(source);
        });

    });
});