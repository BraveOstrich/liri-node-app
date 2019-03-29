require("dotenv").config();

var keys = require("./keys.js");

var fs = require("fs");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
  

var axios = require("axios");

var command = process.argv[2];


// ------- Bands In Town ------- //

function bandsResponse(){

    var band = process.argv.slice(3).join(" ");

    if(!band){
        band = "Weezer";
    }

    axios.get("http://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
        function(response){
            // debugger;
            for (var i = 0; i < response.data.length; i++){
            var info = response.data[i].venue
            //console.log(response.data[i])
            console.log("\n//------- Bands In Town -------//\n");
            console.log("The artist name is: " + band);
            console.log("The name of the venue is " + info.name);
            console.log("The venue is located in " + info.city + ", " + info.region + ", " + info.country);
            console.log("The date of the event is " + response.data[i].datetime);
            console.log("\n//-----------------------------//\n");
            }
        })
}

//bandsResponse()


// ------- Spotify This ------- //

function spotifyThis(){

    var song = process.argv.slice(3).join(" ");

    if(!song){
        song = "the sign";
    }

    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks); 
        console.log("\n//--------------- Spotify ---------------//\n");
        console.log("The album artist is: " + );
        console.log("The song name is: " + );
        console.log("Here is a link to the song on Spotify: " + );
        console.log("The name of the album is: " + );
        console.log("\n//----------------------------------//\n");
        });
}

//spotifyThis()


// ------- Movie This ------- //

function movieThis(){

    var movie = process.argv.slice(3).join(" ");

    if(!movie){
        movie = "mr nobody";
    }

    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json&tomatoes=true&apikey=trilogy").then(
        function(omdbResponse){
            //console.log(omdbResponse);
            console.log("\n//--------------- OMDB ---------------//\n");
            console.log("The movie's title is: " + omdbResponse.data.Title);
            console.log("The movie was released in: " + omdbResponse.data.Released);
            console.log("The movie's rating is: " + omdbResponse.data.imdbRating);
            console.log("The Rotten Tomatoes rating is: " + omdbResponse.data.tomatoRating);
            console.log("The movie was produced in the: " + omdbResponse.data.Country);
            console.log("The movie is in: " + omdbResponse.data.Language);
            console.log("The movie's plot is: " + omdbResponse.data.Plot);
            console.log("The actors are: " + omdbResponse.data.Actors);
            console.log("\n//----------------------------------//\n");
    });
}

     //movieThis()


// ------- Do What It Says ------- //

// function doWhatItSays(){
//     fs.readFile("random.txt", "utf8", function(error, data){
//         console.log(response)
//     });

// }

// doWhatItSays()

if (command === "concert-this"){
    bandsResponse()
} else if (command === "spotify-this-song"){
    spotifyThis();
} else if (command === "movie-this"){
    movieThis();
} else if (command === "do-what-it-says"){
    doWhatItSays();
 }