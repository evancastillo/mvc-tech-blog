const { Post } = require('../models');

const postdata = [
  {
    title: 'How much wood could a wook chuck, chuck, if a wood chuck could chuck wood?',
    body: '6',
    user_id: 1
  },
  {
    title: 'Who is the best Disney character?',
    body: 'Buzz Lightyear, obviously.',
    user_id: 2
  },
  {
    title: 'What is the best anime?',
    body: 'Definitely not Naruto, that show is awful.',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
