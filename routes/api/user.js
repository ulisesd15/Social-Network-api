const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users/
router.route('/').get(getUser).post(createUser);
// /api/users/:userId
router.route('/:userId').get(getSingleUser);
// /api/users/:userId delete
router.route('/:userId').put(updateUser).delete(deleteUser);
// api/users/:userId/ update
router.route('/:userId').put(updateUser);


module.exports = router;
