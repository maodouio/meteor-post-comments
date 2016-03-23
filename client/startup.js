
Meteor.startup(function () {
  console.log("Package post-comments startup...");
  console.log("Session.set('hasPackagePostComments', true);");
  Session.set('hasPackagePostComments', true);
});
