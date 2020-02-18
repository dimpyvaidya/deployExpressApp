const express = require("express");
const exphbs = require('express-handlebars');
const app = express();
app.use(express.static('static'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get("/", (req, res) => {
    res.render('home', {
        title: "Home",
        headingInfo: "Home Page",
        randomContent: "Home Page"
    })
});

app.get("/home", (req, res) => {
    res.render('home', {
        title: "Home",
    })
})
app.get("/login", (req, res) => {
    res.render("login", {
        title: "SMS Page"
    });
});
app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "SMS Page"
    });
});

app.listen(3000, () => {
    console.log(`Web server is running`);
})