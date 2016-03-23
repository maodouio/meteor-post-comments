Meteor.publishComposite("userCommentsComposite", function(userId) {
  return {
    find: function() {
      return Comment.collection.find({userId: userId});
    },
    children: [
      {
        find: function(comment) {
          if (typeof Posts !== "undefined") {
            return Posts.find({_id: comment.linkedObjectId});
          }
        },
        children: [
          {
            find: function(post) {
              if (typeof Like !== "undefined" && typeof Like.collection !== "undefined") {
                return Like.collection.find({linkedObjectId: post._id});
              }
            }
          },
          {
            find: function(post) {
              // Find post picture
              return Images.find({_id: post.picture});
            }
          },
          {
            find: function(post) {
              if (typeof Enrollments !== "undefined") {
                return Enrollments.find({postId: post._id});
              }
            }
          },
          {
            find: function(post) {
              return Meteor.users.find({_id: post.userId});
            }
          }
        ]
      }
    ]
  }
});
