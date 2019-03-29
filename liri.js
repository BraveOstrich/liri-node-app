require("dotenv").config();

var keys = require("./keys.js");

var fs = require("fs");

var spotify = require("node-spotify-api");

var axios = require("axios");

var command = process.argv[2];



// ------- Bands In Town -------

function bandsResponse(){

    var band = process.argv[3];

    if(!band){
        band = "weezer";
    }

    axios.get("http://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
        function(response){
            var info = response.data[0].venue
            console.log(response.data)
            console.log("\n/------- Bands In Town -------/\n");
            console.log("The artist name is: " + band);
            console.log("The name of the venue is " + info.name);
            console.log("The venue is located in " + info.city + ", " + info.region + ", " + info.country);
            console.log("The date of the event is " + response.data[0].datetime);
            console.log("\n/--------------------------------/\n");
        })
}

bandsResponse()


// ------- Spotify This -------

// function spotifyThis(){

//     var song = process.argv[3];

//     if(!song){
//         song = "the sign";
//     }

//     axios.get("https://api.spotify.com/v1/tracks/" + song).then(
//         function(response){
//             console.log(response)
//             // console.log("\n" + "/---------------Spotify---------------/\n");
//             // console.log("The album artist is: " + omdbResponse.data.Title);
//             // console.log("The song name is: " + omdbResponse.data.Released);
//             // console.log("Here is a link to the song on Spotify: " + omdbResponse.data.Released);
//             // console.log("The name of the album is: " + omdbResponse.data.imdbRating);
//             // console.log("\n/----------------------------------/\n");
//     })
// }

// spotifyThis()


// ------- Movie This -------

// function movieThis(){

//     var movie = process.argv[3];

//     if(!movie){
//         movie = "mr nobody";
//     }

//     axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json&tomatoes=true&apikey=trilogy").then(
//         function(omdbResponse){
//             //console.log(omdbResponse);
//             console.log("\n" + "/---------------OMDB---------------/\n");
//             console.log("The movie's title is: " + omdbResponse.data.Title);
//             console.log("The movie was released in: " + omdbResponse.data.Released);
//             console.log("The movie's rating is: " + omdbResponse.data.imdbRating);
//             console.log("The Rotten Tomatoes rating is: " + omdbResponse.data.tomatoRating);
//             console.log("The movie was produced in the: " + omdbResponse.data.Country);
//             console.log("The movie is in: " + omdbResponse.data.Language);
//             console.log("The movie's plot is: " + omdbResponse.data.Plot);
//             console.log("The actors are: " + omdbResponse.data.Actors);
//             console.log("\n/----------------------------------/\n");
//     });
// }

//     movieThis()


// ------- Do What It Says -------

// function doWhatItSays(){
//     fs.readFile("random.txt", "utf8", function(error, data){
//         console.log(response)
//     });

// }

// doWhatItSays()
