const User = require('./users');
const Post = require('./posts');
const Comments = require('./comments');

User.hasMany(Post, {
  foreignKey: 'User_id',
    onDelete: "CASCADE"
});

Post.belongsTo(User, {
  foreignKey: 'User_id',
  onDelete: "CASCADE"
});

Comments.belongsTo(User, {
  foreignKey: 'User_id',
  onDelete: "CASCADE"
});

Comments.belongsTo(Post, {
    foreignKey: 'Post_id',
    onDelete: "CASCADE"
});

module.exports = { User, Post, Comments };