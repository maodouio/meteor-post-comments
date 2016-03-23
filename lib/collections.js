
var Commentable = CommentableModel.extend();

if (typeof Posts !== "undefined") {
  Posts._transform = function (document) {
    return new Commentable(document);
  };

  Commentable.prototype._collection = Posts;
}
