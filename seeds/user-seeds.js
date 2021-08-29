const { User } = require('../models');

const userdata = [
  {
    username: 'Evan',
    email: 'evan@evan.com',
    password: 'password123'
  },
  {
    username: 'Takumi',
    email: 'trueno@race.com',
    password: 'password123'
  },
  {
    username: 'Kesuke',
    email: 'fd@rotary.com',
    password: 'password123'
  },
  {
    username: 'Riyosuke',
    email: 'fc@rotary.com',
    password: 'password123'
  },
  {
    username: 'Gojo',
    email: 'gojo@kaisen.com',
    password: 'password123'
  }
];

const seedUsers = async () => {
  for (let i = 0; i < userdata.length; i++) {
    await User.create(userdata[i], { individualHooks: true });
  }
}

module.exports = seedUsers;
