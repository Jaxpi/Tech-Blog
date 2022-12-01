const { Post } = require('../models/');

const postData = [
    {
      "post_title": "Sample Title 1",
      "post_content": "Sample Contents 1",
      "user_id": 1,
      "date_created": "Sample Date 1"
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;