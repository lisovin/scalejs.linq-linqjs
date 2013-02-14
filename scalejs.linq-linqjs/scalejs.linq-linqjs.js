/*global define*/
define([
    'scalejs!core',
    'linqjs'
], function (
    core,
    Enumerable
) {
    'use strict';

    core.registerExtension({
        linq: {
            enumerable: Enumerable
        }
    });
});

