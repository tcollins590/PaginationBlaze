Package.describe({
    "name": "tcollins590:pagination-blaze-semantic",
    "summary": "Fork of Kurounin's Blaze paginator template for kurounin:pagination package.",
    "version": "1.0.9",
    "git": "https://github.com/tcollins590/PaginationBlaze.git"
});

Package.onUse(function (api) {
    api.versionsFrom("METEOR@1.2.1");
    api.use([
        "meteor-base",
        "underscore",
        "kurounin:pagination@1.0.24"
    ]);

    api.use([
        "reactive-var",
        "reactive-dict"
    ], "client");

    api.use([
        "templating",
        "blaze"
    ], "client");

    api.addFiles([
        "client/template.html",
        "client/template.js"
    ], "client");
});