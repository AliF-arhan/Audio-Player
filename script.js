// Utility function to print messages instead of using console.log
import { print } from "./utils/print.js";
// Import the songs array from the songs.js module, which contains metadata for each song in the audio player.
import { songs } from "./utils/songs.js";
// Import the random function from the randomFunc.js module, which generates a random index for selecting songs.
import { random } from "./utils/randomFunc.js";

// Variables to hold references to the song metadata elements in the DOM
let songName = document.querySelector(".songName");
let songArtist = document.querySelector(".songArtist");
let songImage = document.querySelector(".songImage");
let playButton = document.querySelector("#play-btn");
let audioplayer = document.querySelector("#audio-player");
let currentTime = document.querySelector("#current-time");
let duration = document.querySelector("#duration");
let nextButton = document.querySelector("#next-btn");
let previousButton = document.querySelector("#prev-btn");
let repeatButton = document.querySelector("#repeat-btn");

// flag to track whether a song is currently playing (0 = not playing, 1 = playing)
// if the song is playing the playButton would show a pause icon and if the song is not playing the playButton would show a play icon.
let playFlag = 0;

// To track if the user is starting the application for the first time or not. If the user is starting the application for the first time, then the playSong function will be called to play a random song from the songs array.
let playCount = 0;

let songCount = 0;

// Helper function to format seconds into MM:SS format
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

// 1. When the audio metadata loads, set the correct duration
audioplayer.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audioplayer.duration);
});

// 2. As the song plays, continuously update the current time
audioplayer.addEventListener("timeupdate", () => {
  currentTime.textContent = formatTime(audioplayer.currentTime);
});

let loadSong = () => {
  if (songCount >= songs.length) {
    songCount = 0; // Reset to the first song if we've reached the end of the array
  }
  let song = songs[songCount];
  audioplayer.src = song.audio;
  audioplayer.load(); // Load the new audio source before playing
  duration.textContent = formatTime(audioplayer.duration);
  currentTime.textContent = formatTime(audioplayer.currentTime);
  songName.textContent = song.title;
  songArtist.textContent = song.artist;
  songImage.src = song.image;
};

// Function to play a random song from the songs array
let playSong = () => {
  if (playFlag == 0) {
    loadSong();
    playButton.innerHTML =
      '<i id="pause-icon" class="fa-solid fa-pause ml-0.5"></i>';
    playFlag = 1;
    playCount++;
    audioplayer.play();
  }
};

// Function to pause the currently playing song
let pauseSong = () => {
  if (playFlag == 1) {
    playButton.innerHTML =
      '<i id="play-icon" class="fa-solid fa-play ml-0.5"></i>';
    playFlag = 0;
    audioplayer.pause();
  }
};

// Function to resume the currently paused song
let resumeSong = () => {
  if (playFlag == 0 && playCount > 0) {
    playButton.innerHTML =
      '<i id="pause-icon" class="fa-solid fa-pause ml-0.5"></i>';
    playFlag = 1;
    audioplayer.play();
  }
};

window.addEventListener("load", () => {
    loadSong(); // Load the initial song when the window loads
})


// Event listener for the play button to toggle between playing and pausing the song
playButton.addEventListener("click", () => {
  if (playFlag == 0 && playCount == 0) {
    playSong();
    print("Application started and song is playing");
  } else if (playFlag == 0 && playCount > 0) {
    resumeSong();
    print("Song is resumed");
  } else {
    pauseSong();
    print("Song is paused");
  }
});

nextButton.addEventListener("click", () => {
    songCount += 1; // Increment songCount by 1 to go to the next song
  loadSong();
  playFlag = 1; // Set playFlag to 1 to indicate that a song is playing
  playButton.innerHTML =
    '<i id="pause-icon" class="fa-solid fa-pause ml-0.5"></i>';
  audioplayer.play();
  print("Next song is playing");
});

previousButton.addEventListener("click", () => {
    songCount -= 1; // Decrement songCount by 1 to go back to the previous song
    if (songCount < 0) {
        songCount = songs.length - 1; // Wrap around to the last song if we go before the first song
    }
  loadSong();
  playFlag = 1; // Set playFlag to 1 to indicate that a song is playing
  playButton.innerHTML =
    '<i id="pause-icon" class="fa-solid fa-pause ml-0.5"></i>';
  audioplayer.play();
  print("Previous song is playing");
});

audioplayer.loop = false; // Set the loop property of the audio player to false initially
repeatButton.addEventListener("click", () => {
    audioplayer.loop = !audioplayer.loop; // Toggle the loop property of the audio player
    print(`Repeat is ${audioplayer.loop ? "enabled" : "disabled"}`); // Print the current state of the repeat functionality
})






