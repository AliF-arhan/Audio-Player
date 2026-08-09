// Utility function to print messages instead of using console.log
import { print } from "./utils/print.js";

// Variables to hold references to the song metadata elements in the DOM
let songName;
let songArtist;
let songImage;


// Locate the HTML element that displays the song title.
// The selector targets the element with the class name "songName".
// This assignment links the JavaScript variable to the page content.
songName = document.querySelector('.songName');

// Locate the HTML element that displays the song artist name.
// The selector targets the element with the class name "songArtist".
// This allows the script to read or update the artist information from JavaScript.
songArtist = document.querySelector('.songArtist');

// Find the HTML element that displays the song cover image.
// The query selector targets an element with the class name "songImage".
// This variable will be used when the player needs to show the album art.
songImage = document.querySelector('.songImage');

// Print the currently selected values for debugging and development purposes.
// These logs help confirm that the DOM elements were found correctly and that
// their content matches what is expected in the HTML.
print(songImage.src);
print(songName.textContent);
print(songArtist.textContent);