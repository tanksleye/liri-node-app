

require("dotenv").config();


// var fs = require("fs");

var Keys = require("./keys.js");

// var spotify = new spotify(keys.spotify);
// var movie = new Movie();
var keys = new Keys();

input = process.argv;

    var searchType    = input[2];
    
    var searchTerm = input.slice(3).join(" ");


if (!searchType){
    searchTerm = "movie-this";
}

if (!searchTerm) {
    searchTerm = "dirty dancing";
}

if (searchType === "movie-this") {
    console.log("Searching for movie");
    keys.findMovie(searchTerm);
} else if (searchType === "concert-this") {
    console.log("Searching for a concert");
    keys.findConcert(searchTerm);
} else if (searchType === "spotify-this-song") {
    console.log("Searching for a song");
    keys.findSong(searchTerm);
} else {
    console.log("Searching for WHAT YOU WANT!!");
    keys.findDoWhatISay(searchTerm);
}


// I tried to do a switch but couln't quite understand it so I went to if else 
// switch(searchType) {
//     case "concert-this":
//         findConcert();
//         break;

//     case "spotify-this-song":
//         findSong();
//         break;

//     case "movie-this":
//         findMovie();
//         break;

//     case "do-what-it-says":
//         doWhatItSays();
//         break;
// }