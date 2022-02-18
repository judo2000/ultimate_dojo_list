const {
    Style,
    Club,
} = require('../models');

module.exports = {
    createStyle: async (req, res) => {
        const style_name = req.body;
        if (!style_name) {
            return res.status(400).json({ error: 'Please provide a style name'});
        }
        try {
            const style = await Style.create(
                style_name
            )
            res.json(style);
        } catch (e) {
            res.json(e);
        }
    },
    getAllStyles: async (req, res) => {
        try {
            const stylesData = await Style.findAll({});
            const styles = stylesData.map(style => style.get({ plain: true }));
            res.json(styles);
        } catch (e) {
            res.json(e);
        }
    },
    getStyleById: async(req,res) => {
        try {
            const styleData = await Style.findByPk(req.params.styleId);
            const style = styleData.get({ plain: true});
            res.json(style);
        } catch (e) {
            res.json(e);
        }
    }
}