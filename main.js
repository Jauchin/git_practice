let express = require('express');
let app = express();
let get_time = function (req, res, next) {
    console.log('Time:', Date.now());
    next();
};
app.use(get_time);
app.get("/", (req, res) => {
    res.send("/");
});
app.get("/about", (req, res) => {
    res.send("/about");
});

app.listen("8888", ()=>{
    console.log("we are listening at 8888");
})