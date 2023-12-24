const audioFiles = {
    kick: "sounds/kick.mp3",
    snare: "sounds/snare.mp3",
    hihat: "sounds/hihat.mp3",
};

const drumPads = document.querySelectorAll("#drum-machine button");

drumPads.forEach(pad => {
    pad.addEventListener("click", () => {
        const soundName = pad.dataset.sound;
        const sound = new Audio(audioFiles[soundName]);
        sound.play();
    });
});
