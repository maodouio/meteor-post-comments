Router.map(function() {
  // USERS ARTIVITIES
  // -------------------------------------------------------
  this.route('userComments', {
    template: 'userComments',
    path: '/user/:_id/comments/',
    waitOn: function () {
      Meteor.subscribe('images');
      return Meteor.subscribe('userCommentsComposite', this.params._id);
    },
    data: function() {
      console.log("activities: Activities.find()", Activities.find().fetch());
      return {
        comments: Comment.collection.find(),
        activities: Activities.find({}, {sort: {createdAt: -1}}),
        user: Meteor.users.findOne({_id: this.params._id}),
      };
    },
  });
});