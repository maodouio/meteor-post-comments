Meteor.publishComposite("userCommentsComposite", function(userId) {
  return {
    find: function() {
      // 根据用户 Id 查询出该用户所有的评论集合，注意这里是集合
      return Comment.collection.find({userId: userId});
    },
    children: [
      {
        find: function(comment) {
          // 遍历查询出来的评论集合中所有信息，根据每一条评论关联的文章 Id 查询文章数据
          console.log("Get activityId by commantId : commandId =", comment._id, " commandLinkObjectId =", comment.linkedObjectId);
          return Activities.find({_id: comment.linkedObjectId});
        }
      }
    ]
  }
});