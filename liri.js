require("dotenv").config();

var keys = require("./keys.js");

var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

//var concert-this = 

//var spotify-this-song = ;

//var movie-this = ;

//var do-what-it-says = ;

var command = process.argv[2];

axios.get("http://rest.bandsintown.com/artists/" + name + "/events?app_id=codingbootcamp").then(
    function(response){
        console.log(response)
    })

axios.get("https://api.spotify.com/v1/artists/beyonce/albums").then(
    function(response){
        console.log(response)
})


function(movie-this){

var movie = process.argv[3];

axios.get("http://www.omdbapi.com/?apikey=ba1a2064&?t=" + movie).then(
    function(response){
        console.log(response)
})
}

