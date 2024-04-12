const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtsController.js');

// /api/courses
router.route('/').get(getThoughts).post(createThought);
// /api/users/:userId
router.route('/:userId').get(getSingleThought);
// /api/users/:userId delete
router.route('/:userId').put(updateThought).delete(deleteThought);
// api/users/:userId/ update
router.route('/:userId').put(deleteThought);

module.exports = router;
