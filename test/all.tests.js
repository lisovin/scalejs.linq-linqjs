require.config({
    paths: {
        boot: '../lib/jasmine/boot',
        'jasmine-html': '../lib/jasmine/jasmine-html',
        jasmine: '../lib/jasmine/jasmine',
        'scalejs.linq-linqjs': '../build/scalejs.linq-linqjs'
    },
    shim: {
        jasmine: {
            exports: 'window.jasmineRequire'
        },
        'jasmine-html': {
            deps: [
                'jasmine'
            ],
            exports: 'window.jasmineRequire'
        },
        boot: {
            deps: [
                'jasmine',
                'jasmine-html'
            ],
            exports: 'window.jasmineRequire'
        }
    },
    scalejs: {
        extensions: [
            'scalejs.linq-linqjs'
        ]
    }
});

require(['boot'], function () {
    require ([
        './scalejs.linq-linqjs.test.js'
    ], function () {
        window.onload();
    });
});
