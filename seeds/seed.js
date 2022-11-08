const sequelize = require('../config/connection');
const User = require('../models/users');
const userData = require('./user-seeds.json');
const Post = require('./models/posts')
const postData = require('./post-seeds.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();