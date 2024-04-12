const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');
const reactionRoutes = require('./reactionRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/user', userRoutes);
router.use('/reaction', reactionRoutes);
