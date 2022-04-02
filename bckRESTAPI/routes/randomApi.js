// @dev localhost:3000/randomApi
var express = require('express');
var request = require("request");
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

// @dev request Random API
router.get('/randomApi', function (req, res, next) {
    (async () => {
        await request("https://randomuser.me/api/", function (error, response, body) {
            if (error) {
                console.warn("Error: " + error);
            }
            else {
                var json = JSON.parse(body);
                res.send(json);
            }
        });
    })();
});


module.exports = router;
