const router = require('express').Router();
const userRoutes = require('./userRoutes');
const clubRoutes = require('./clubRoutes');

router.use('/users', userRoutes);
router.use('/clubs', clubRoutes);

module.exports = router