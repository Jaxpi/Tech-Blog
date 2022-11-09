const { Posts } = require('../models/');

const postData = [
    {
      "post_title": "Sample Title 1",
      "contents": "Sample Contents 1",
      "creator_name": "Sample User Name 1",
      "date_created": "Sample Date 1"
    }
];

const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;