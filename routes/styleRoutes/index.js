const router = require('express').Router();
const {
    createStyle,
    getAllStyles,
} = require('../../controllers/styleController');

router.route('/')
    .post(createStyle)
    .get(getAllStyles)

module.exports = router;