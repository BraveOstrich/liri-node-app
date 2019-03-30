require("dotenv").config();

var keys = require("./keys.js");

var fs = require("fs");

var axios = require("axios");
var moment = require('moment');

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var band;
var song;
var movie;
var selection;




// ------- Bands In Town ------- //

function bandsResponse(){

    band = process.argv.slice(3).join(" ");

    if(!band){
        band = "Weezer";
    }

    axios.get("http://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
        function(response){
            // debugger;
            for (var i = 0; i < response.data.length; i++){
            var info = response.data[i].venue
            var newDate = moment(response.data[i].datetime).format("MM/DD/YYYY")
            //console.log(response.data[i])
            console.log("\n//------- Bands In Town -------//\n");
            console.log("The artist name is: " + band);
            console.log("The name of the venue is " + info.name);
            console.log("The venue is located in " + info.city + ", " + info.region + ", " + info.country);
            console.log("The date of the event is " + newDate);
            console.log("\n//-----------------------------//\n");
            }
        })
}




// ------- Spotify This ------- //

function spotifyThis(){

    song = process.argv.slice(3).join(" ");

    if(!song){
        song = "The Sign";
    }
    
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        debugger;
        for (var i = 0; i < data.tracks.items.length; i++){
        var info = data.tracks.items[i]
        //console.log(data); 
        console.log("\n//--------------- Spotify ---------------//\n");
        console.log("The album artist is: " + info.artists[0].name);
        console.log("The song name is: " + info.name);
        console.log("Here is a link to the song on Spotify: " + info.preview_url);
        console.log("The album the song is from is: " + info.album.name);
        console.log("\n//---------------------------------------//\n");
        }
        });
}




// ------- Movie This ------- //

function movieThis(){

    movie = process.argv.slice(3).join(" ");

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
            console.log("\n//------------------------------------//\n");
    });
}

     


// ------- Do What It Says ------- //

function doWhatItSays(){
    fs.readFile("random.txt", "utf8", function(error, data){
        doWhatItSaysResponse = data.split(",");
        command = doWhatItSaysResponse[0], 
        selection = doWhatItSaysResponse[1]
        console.log(doWhatItSaysResponse[0])
        console.log(doWhatItSaysResponse[1])
        
        if (command === "concert-this"){
            selection = band;
            bandsResponse()
        } else if (command === "spotify-this-song"){
            selection = song;
            spotifyThis();
        } else if (command === "movie-this"){
            movie = selection;
            movieThis();
        };
    });

}



if (command === "concert-this"){
    bandsResponse()
} else if (command === "spotify-this-song"){
    spotifyThis();
} else if (command === "movie-this"){
    movieThis();
} else if (command === "do-what-it-says"){
    doWhatItSays();
}