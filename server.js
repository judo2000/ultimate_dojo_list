const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config');

const routes = require('./routes');

const hbs = exphbs.create({});
const app = express();

const PORT = process.env.PORT || 3000;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'))

// use routes
app.use(routes);

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
})