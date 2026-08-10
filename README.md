# Modern Audio Player

A sleek, dark-themed web audio player built from scratch using vanilla JavaScript and Tailwind CSS to brush up on frontend development skills.

---

## Features
* **Dark Theme UI:** Styled with a clean, modern aesthetic utilizing Tailwind CSS.
* **Dynamic Playback Controls:** Fully functional Play, Pause, Shuffle, and Track management.
* **Real-time Track Metadata:** Updates track title, artist name, album art, and timestamps dynamically.
* **Modular JavaScript Architecture:** Uses ES6 modules to cleanly separate application logic and song metadata.

---

## Project Structure & Setup Instructions

Since local media files (audio and images) are ignored via `.gitignore` to keep the repository lightweight, you will need to set up your local `Assets` folder manually to run the project.

### 1. Create the Assets Directory
In the root directory of your project, create a folder named `Assets` containing two subfolders (`.mp3 files` and `images`) so your folder structure looks like this:

```text
AUDIO PLAYER/
│
├── Assets/
│   ├── .mp3 files/
│   └── images/
│
├── utils/
│   └── songs.js
│
├── index.html
├── script.js
└── .gitignore
