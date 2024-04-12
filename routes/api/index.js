const router = require('express').Router();
const courseRoutes = require('./thoughtRoutes');
const usersRoutes = require('./usersRoutes');
const thoughtsRoutes = require('./thoughtRoutes');

router.use('/thought', courseRoutes);
router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
