const User = require('./User');
const Club = require('./Club');
const Style = require('./Style');

User.hasMany(Club, {
    foreignKey: 'userId'
});

Club.belongsTo(User, {
    foreignKey: 'userId'
})

Style.hasMany(Club, {
    foreignKey: 'styleId',
    onDelete: 'SET NULL',
});

Club.belongsTo(Style, {
    foreignKey: 'styleId'
})

module.exports = {
    Club,
    User,
    Style,
}