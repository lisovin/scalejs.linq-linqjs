/*global define*/
define([
    'scalejs!core',
    './scalejs.linq/enumerable'
], function (
    core,
    enumerable
) {
    'use strict';

    core.registerExtension({
        linq: {
            enumerable: enumerable
        }
    });
});

