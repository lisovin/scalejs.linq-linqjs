/*global define,describe,expect,it*/
/*jslint sloppy: true*/
/// <reference path="../Scripts/jasmine.js"/>
define([
    'scalejs!core',
    'scalejs!application'
], function (core) {
    var enumerable = core.linq.enumerable;

    describe('enumerable', function () {
        it('`from` creates enumerable', function () {
            var e = enumerable.from([1, 5, 3, 10]);
            expect(e).toBeDefined();
        });

        it('`toArray` returns array', function () {
            var source = [1, 5, 3, 10];
            expect(enumerable.from(source).toArray()).toEqual(source);
        });

        it('`concat` concatenates enumerable and array', function () {
            var e1 = enumerable.from([1, 2]);
            expect(e1.concat([3, 4]).toArray()).toEqual([1, 2, 3, 4]);
        });

        it('`concat` concatenates enumerable and enumerable', function () {
            var e1 = enumerable.from([1, 2]),
                e2 = enumerable.from([3, 4]);
            expect(e1.concat(e2).toArray()).toEqual([1, 2, 3, 4]);
        });

        it('`except` of enumerable and array', function () {
            var e1 = enumerable.from([1, 2, 3, 4]);
            expect(e1.except([2, 4]).toArray()).toEqual([1, 3]);
        });

        it('`except` of enumerable and enumerable', function () {
            var e1 = enumerable.from([1, 2, 3, 4]),
                e2 = enumerable.from([2, 4]);
            expect(e1.except(e2).toArray()).toEqual([1, 3]);
        });

        it('`intersect` of enumerable and enumerable', function () {
            var e1 = enumerable.from([1, 2, 3, 4]),
                e2 = enumerable.from([2, 4, 6, 8]);
            expect(e1.intersect(e2).toArray()).toEqual([2, 4]);
        });

        it('`union` of enumerable and enumerable', function () {
            var e1 = enumerable.from([1, 2, 2, 3]),
                e2 = enumerable.from([2, 3, 3, 4]);
            expect(e1.union(e2).toArray()).toEqual([1, 2, 3, 4]);
        });

        it('`groupBy`', function () {
            var r = enumerable.range(0, 20)
                .groupBy('$ % 3')
                .select(function (g) {
                    return {k: g.key(), count: g.count()};
                })
                .toArray();
            expect(r).toEqual([
                {k: 0, count: 7},
                {k: 1, count: 7},
                {k: 2, count: 6}]);
        });
    });
});