const router = require('express').Router();
const {
  getSingleReaction,
  deleteReaction,
  updateReaction,
} = require('../../controllers/reactionController');


// /api/users/:userId
router.route('/:userId').get(getSingleReaction);
// /api/users/:userId delete
router.route('/:userId').put(updateReaction).delete(deleteReaction);



module.exports = router;
