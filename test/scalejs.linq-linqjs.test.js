define([
    'scalejs!core',
    'scalejs!application'
], function(
    core
) {
    var linq = core.linq;

    // For deeper testing, log to console
    console.log('core.linq: ', linq);

    describe('core.linq', function() {
        it('is defined', function() {
            expect(true).toBe(true);
            expect(linq).toBeDefined();
        });

        it('linq statement', function() {
            var r = linq.enumerable.range(0, 100)
                .groupBy(function (x) { return x % 5; })
                .select(function (g) { return {
                    num: g.key(),
                    sum: g.sum(),
                    count: g.count(),
                    avg: g.average()
                }})
                .where(function (v) {
                    return v.num > 2;
                })
                .toArray();
            expect(r.length).toBe(2);
            expect([r[0].count, r[1].count]).toEqual([20, 20]);
        });
    });
});

