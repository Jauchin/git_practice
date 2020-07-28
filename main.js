let express = require('express');
let app = express();
let port = process.env.PORT || 8888;
// let get_time = function (req, res, next) {
//     console.log('Time:', Date.now());
//     next();
// };
// app.use(get_time);
app.get("/", (req, res) => {
    res.send("/Hello world");
});
app.get("/about", (req, res) => {
    res.send("/about");
});

app.listen(port, ()=>{
    console.log("we are listening at 8888");
})