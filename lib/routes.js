Router.map(function() {
  // USERS POSTS
  // -------------------------------------------------------
  this.route('userPostComments', {
    template: 'userPostComments',
    path: '/user/:_id/postcomments/',
    waitOn: function () {
      // 只能在这里订阅，组合订阅中如果没有找到用户的评论，那么则不会发用这个用户的信息
      Meteor.subscribe('user', this.params._id);
      return Meteor.subscribe('userPostCommentsComposite', this.params._id);
    },
    data: function() {
      console.log("Posts: Posts.find()", Posts.find().fetch());
      return {
        comments: Comment.collection.find(),
        posts: Posts.find({}, {sort: {createdAt: -1}}),
        user: Meteor.users.findOne({_id: this.params._id}),
      };
    },
  });
});
