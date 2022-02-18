const router = require('express').Router();
const clubRoutes = require('../clubRoutes');
const userRoutes = require('../userRoutes');

router.use('/clubs', clubRoutes);
router.use('/users', userRoutes);
module.exports = router;