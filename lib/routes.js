Router.map(function() {
  // USERS ARTIVITIES
  // -------------------------------------------------------
  this.route('userComments', {
    template: 'userComments',
    path: '/user/:_id/comments/',
    waitOn: function () {
      // 只能在这里订阅，组合订阅中如果没有找到用户的评论，那么则不会发用这个用户的信息
      Meteor.subscribe('user', this.params._id);
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
