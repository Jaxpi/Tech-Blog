const sequelize = require('../config/connection');
// const User = require('../models/users');
// const userData = require('./user-seeds.json');
const Posts = require('../models/posts')
const postData = require('./post-seeds')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Posts.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();