require("dotenv").config();

var keys = require("./keys.js");

var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

//var concert-this;

//var spotify-this-song = ;

//var movie-this = ;

//var do-what-it-says = ;

var command = process.argv[2];
var selection = process.argv[3];



axios.get("http://rest.bandsintown.com/artists/weezer/events?app_id=codingbootcamp").then(
    function(bandsResponse){
        console.log(bandsResponse)
        // console.log("/-------Bands-In-Town------------/");
        // console.log("The name of the venue is " + );
        // console.log("The venue is located in " + );
        // console.log("The name of the venue is " + );
        // console.log("The date of the event is " + );
        // console.log("/--------------------------------/");
    })

axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function(omdbResponse){
    console.log(omdbResponse);
    console.log("/---------------OMDB---------------/");
    console.log("The movie's title is " + response.data.imdbRating);
    console.log("The movie was released in " + response.data.imdbRating);
    console.log("The movie's rating is " + response.data.imdbRating);
    console.log("The Rotten Tomatoe's rating is " + response.data.imdbRating);
    console.log("The movie was produced in " + response.data.imdbRating);
    console.log("The movie's plot is " + response.data.imdbRating);
    console.log("The actors are " + response.data.imdbRating);
    console.log("/----------------------------------/");
    })




if(command === concertThis){
    bandsResponse()
} else if (command === spotifyThisSong){

} else if (command === movieThis){
    omdbResponse()
} else if (command === doWhatItSays){

}