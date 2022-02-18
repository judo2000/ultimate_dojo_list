const router = require('express').Router();
const {
    createClub,
    getAllClubs,
    getClubById,
} = require('../../controllers/clubControllers');

router.route('/')
    .get(getAllClubs)
    .post(createClub)

router.route('/:clubId')
    .get(getClubById)

module.exports = router;