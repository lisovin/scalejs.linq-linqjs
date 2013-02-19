var require = {
    "baseUrl":  ".",
    "paths":  {
        "es5-shim":  "Scripts/es5-shim",
        "jasmine":  "Scripts/jasmine",
        "jasmine-html":  "Scripts/jasmine-html",
        "linqjs":  "Scripts/linq.min",
        "scalejs":  "Scripts/scalejs-0.2.6",
        "scalejs.linq-linqjs":  "Scripts/scalejs.linq-linqjs-3.0.3"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.linq-linqjs"
        ]
    },
    "shim":  {
        "jasmine":  {
            "exports":  "jasmine"
        },
        "jasmine-html":  {
            "deps":  [
                "jasmine"
            ]
        }
    }
};
