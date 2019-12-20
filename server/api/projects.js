const router = require('express').Router();
const Sequelize = require('sequelize');

//
///////////////////////////// UPDATE ALL BELOW  /////////////////////////////
//

const Project = require('../db/models/projects');

// matches GET requests to /api/puppies/
router.get('/', async function(req, res, next) {
  try {
    /* CHANGE */
    const allProjects = await Project.findAll();
    res.status(200).json(allProjects);
    /* CHANGE */
  } catch (error) {
    next(error);
  }
});
// matches POST requests to /api/puppies/
router.post('/', function(req, res, next) {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});
// matches PUT requests to /api/puppies/:puppyId
router.put('/:puppyId', function(req, res, next) {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});
// matches DELETE requests to /api/puppies/:puppyId
router.delete('/:puppyId', function(req, res, next) {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

//
///////////////////////////// UPDATE ALL ABOVE /////////////////////////////
//

module.exports = router;
