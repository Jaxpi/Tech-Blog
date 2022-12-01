const User = require('./users');
const Post = require('./posts');
const Comments = require('./comments');

User.hasMany(Post, {
  foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Comments.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "CASCADE"
});

User.hasMany(Post, {
  foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Post.hasMany(Comments, {
  foreignKey: 'post_id',
    onDelete: "CASCADE"
});

module.exports = { User, Post, Comments };