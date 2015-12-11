Meteor.publishComposite("userCommentsComposite", function(userId) {
  return {
    find: function() {
      return Comment.collection.find({userId: userId});
    },
    children: [
      {
        find: function(comment) {
          if (typeof Activities !== "undefined") {
            return Activities.find({_id: comment.linkedObjectId});
          }
        },
        children: [
          {
            find: function(activity) {
              if (typeof Like !== "undefined" && typeof Like.collection !== "undefined") {
                return Like.collection.find({linkedObjectId: activity._id});
              }
            }
          },
          {
            find: function(activity) {
              // Find activity picture
              return Images.find({_id: activity.picture});
            }
          },
          {
            find: function(activity) {
              if (typeof Enrollments !== "undefined") {
                return Enrollments.find({activityId: activity._id});
              }
            }
          },
          {
            find: function(activity) {
              return Meteor.users.find({_id: activity.userId});
            }
          }
        ]
      }
    ]
  }
});
