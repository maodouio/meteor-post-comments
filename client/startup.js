
Meteor.startup(function () {
  console.log("Package activity-comments startup...");
  console.log("Session.set('hasPackageActivityComments', true);");
  Session.set('hasPackageActivityComments', true);
});
