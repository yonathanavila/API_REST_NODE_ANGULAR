// @dev localhost:3000/randomApi
var express = require('express');
// require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
require('dotenv').config({ path: ".env" });
var request = require("request");
var router = express.Router();

const {
    API_URL
} = process.env;

console.log(`API URL: ${API_URL}`);

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

// @dev request Random API
router.get('/randomApi', function (req, res, next) {
    console.warn(API_URL);
    (async () => {
        await request(API_URL, function (error, response, body) {
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
