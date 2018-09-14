// dotenv to read keys
require("dotenv").config();

// npm variables
var Spotify = require('node-spotify-api'); 
var request = require('request');
var moment = require('moment');
// code required to read keys.js file stored in a var
var key = require('./keys.js');
var spotify = new Spotify(key.spotify);

// function "concert-this"
function concertThis(artist){
    if ((process.argv[2]) == "concert-this"){
        (process.argv[3]) == artist;
    }};


// function "spotify-this-song"
function spitifyThis(song){
    if ((process.argv[2]) == "spotify-this-song"){
        (process.argv[3]) == song;
    }};

// function "movie-this"
function movieThis(movie){
    if ((process.argv[2]) == "movie-this"){
        (process.argv[3]) == movie;
    }};

// function "do-what-it-says"

