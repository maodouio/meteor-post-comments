
var Commentable = CommentableModel.extend();

if (typeof Activities !== "undefined") {
  Activities._transform = function (document) {
    return new Commentable(document);
  };

  Commentable.prototype._collection = Activities;
}
