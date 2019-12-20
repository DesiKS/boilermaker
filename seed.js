const { db } = require('./server/db');
const { green, red } = require('chalk');
const Project = require('./server/db/models/projects');
const User = require('./server/db/models/users');

const projects = [
  {
    projectName: '145 Central Park North',
    projectType: 'structural',
    location: 'New York, NY',
    imageUrl:
      'https://www.middlebury.edu/college/sites/www.middlebury.edu.college/files/styles/832x468/public/2019-09/standardized-tests-2-feature-16x9.jpg?fv=i_CiC_Dc&itok=nQZGomco',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    projectName: 'National Air and Space Museum',
    projectType: 'structural',
    location: 'Washington, DC',
    imageUrl:
      'https://www.middlebury.edu/college/sites/www.middlebury.edu.college/files/styles/832x468/public/2019-09/standardized-tests-2-feature-16x9.jpg?fv=i_CiC_Dc&itok=nQZGomco',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

const users = [
  {
    email: 'cody@email.com',
    password: '12345',
    imageUrl: '/cody.png'
  }
];

const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!
  await Project.bulkCreate(projects);
  await User.bulkCreate(users);

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Error seeding database!'));
  console.error(err);
  db.close();
});
