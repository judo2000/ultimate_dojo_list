const {
    Club,
    Style,
    User,
} = require('../models');

module.exports = {
    createClub: async (req, res) => {
        const { club_name, city, state, country, sensei, userId, styleId } = req.body;
        if (!club_name || !city || !state || !country) {
            return res.status(400).json({ error: 'Club name, city, state, and country are required.'});
        }
        try {
            const club = await Club.create({
                club_name,
                city,
                state,
                country,
                sensei,
                userId,
                styleId,
            });
            res.json(club);
        } catch (e) {
            res.json(e);
        }
    },

    getAllClubs: async (req, res) => {
        try {
            const clubsData = await Club.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['first_name', 'last_name'],
                    },
                    {
                        model: Style,
                        attributes: ['style_name'],
                    },
                ],
            })
            const clubs = clubsData.map(club => club.get({plain: true}));
            // res.json(clubs);
            res.render('allClubs', {
                clubs,
            })
        } catch (e) {
            res.json(e);
        }
    },
    getClubById: async (req, res) => {
        try {
            const clubData = await Club.findOne({
                where: {
                    id: req.params.clubId,
                },
                include: [
                    {
                        model: User,
                        attributes: ['first_name', 'last_name']
                    }
                ],
            });
            const club = clubData.get({ plain: true });
            res.json(club)
        } catch (e) {
            res.json(e);
        }

    }
}