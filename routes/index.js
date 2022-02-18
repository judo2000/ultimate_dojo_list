const router = require('express').Router();
const userRoutes = require('./userRoutes');
const clubRoutes = require('./clubRoutes');
const styleRoutes = require('./styleRoutes')

router.use('/users', userRoutes);
router.use('/clubs', clubRoutes);
router.use('/styles', styleRoutes);

module.exports = router
