

console.log("this is loaded");

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");

var Keys = function(){
        this.findMovie = function(movie) {
            // var movie = [];
            var movieKey = "http://www.omdbapi.com/?t=" + movie + "&y=&tt3896198&apikey=6b1153fd";
        
        axios.get(movieKey).then(function(response){
        
                var jsonData = response.data;

                var movieData = [
                 "title: " + jsonData.Title,
                 "year: " + jsonData.Year,
                 "imdbRating: " + jsonData.imdbRating,
                 "country: " + jsonData.Country,
                 "rotten tomatos rating: " + jsonData.Ratings[1].Value,
                 "plot: " + jsonData.Plot,
                 "actors: " + jsonData.Actors
                ].join("\n\n");
        
                fs.appendFile("random.txt", movieData, function(err){
                    if (err) throw err;
                         console.log(movieData);
                });
            });
            // console.log("song: "+ search);
         };

    this.findConcert = function(artist){
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function(response){
            var jsonData = response.data[0];

            var concertData = [
                "Name of the venue: " + jsonData.venue.name,
                "Venue location: " + jsonData.venue.city,
                "Date: " + jsonData.datetime
                // (use moment to format this as "MM/DD/YYYY")
            ].join("\n\n");
            
            moment().format();
            
            fs.appendFile("random.txt", concertData, function(err) {
                if (err) throw err;
                console.log(concertData);
            });
        });
    };

    // having trouble with this one. It said I didn't have a token, not sure what that meant 
    // but it somewhat works
    this.findSong = function(song) {
        var Spotify = require("node-spotify-api");
        
        // var search = function({ type: "track", query: song, limit: 5 }, callback);


        var spotify = new Spotify ({
            id: "0a02303b68e34513b5dd335beb62cd29",
            secret: "d6ec33b3f6ce425c857dd2caab91a56d"
        });
        spotify.search({type: "track", query: song, limit: 5})
            .then(function(response){
                console.log(response);
            })
            .catch(function(err){
                console.log(err);
            });
        
    };


};

// didn't understand the do what it says one. 
// best thing that I could come up with was the readFile
// but not sure if that would work. 

module.exports = Keys;