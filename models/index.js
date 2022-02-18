const User = require('./User');
const Club = require('./Club');

User.hasMany(Club, {
    foreignKey: 'userId'
});

Club.belongsTo(User, {
    foreignKey: 'userId'
})

module.exports = {
    Club,
    User,
}