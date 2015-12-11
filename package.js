Package.describe({
    name: "maodouio:activity-comments",
    summary: "",
    version: "0.0.2",
    git: ""
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");
    
    api.use('iron:router@1.0.12', ["server", "client"]);
    api.use('reywood:publish-composite@1.4.2', "server");
    
    api.use('iron:router@1.0.12', ["server", "client"]);
    api.use("socialize:commentable@0.1.2");
    
    api.imply("socialize:commentable");
    
    api.addFiles("lib/collections.js");
    api.addFiles("lib/routes.js");

    api.addFiles("client/startup.js", "client");

    api.addFiles("server/publications/comments.js", "server");
});
