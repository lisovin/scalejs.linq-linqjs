define([
    'scalejs!core',
    'linqjs'
], function (
    core,
    Enumerable
) {
    'use strict';

    Enumerable.Utils.extendTo(Array);

    core.registerExtension({
        linq: {
            enumerable: Enumerable
        }
    });
});

