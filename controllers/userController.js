const {
    User,
} = require('../models');

module.exports = {
    createUser: async (req, res) => {
        const { first_name, last_name, email, password } = req.body;
        if (!first_name || !last_name || !email || !password) {
            return res.status(400).json({ error: 'You must provide first name, last name, email, and password.'});
        }
        try {
            const user = await User.create({
                first_name,
                last_name,
                email,
                password
            });
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const usersData = await User.findAll({});
            const users = usersData.map(user => user.get({ plain: true }));
            res.json(users);
        } catch (e) {
            res.json(e);
        }
    },
    getUserById: async (req, res) => {
        try {
            const userData = await User.findByPk(req.params.userId);
            const user = userData.get({ plain: true});
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    }
}