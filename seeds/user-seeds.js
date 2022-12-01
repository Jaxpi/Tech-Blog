const { User } = require("../models");

const userData = [
  {
    user_name: "SampleUser",
    password: "SamplePassword1",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
