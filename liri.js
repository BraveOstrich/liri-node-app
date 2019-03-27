require("dotenv").config();

var keys = require("./keys.js");

var fs = require("fs");

//var spotify = new Spotify(keys.spotify);

var axios = require("axios");

//var concert-this = 

//var artist = process.argv[2];

axios.get("http://rest.bandsintown.com/artists/beyonce/events?app_id=codingbootcamp").then(
    function(response){
        console.log(response)
    })

//var spotify-this-song = ;

//var movie-this = ;

//var do-what-it-says = ;