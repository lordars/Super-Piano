const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keyCheck = document.querySelector(".key-check input");

let mapedKeys = [];
let audio = new Audio("src/sounds/a.wav");

const playTune = (key) => {
    audio.src = `src/sounds/${key}.wav`
    audio.play();

    const clikcedKey = document.querySelector(`[data-key ="${key}"]`)
    clikcedKey.classList.add("active");
    setTimeout(() => {
        clikcedKey.classList.remove("active");
    },150)
}

pianoKeys.forEach((key) => {
    console.log(key.dataset.key)
    key.addEventListener("click", () => playTune(key.dataset.key))

    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)){
        playTune(e.key)
        console.log(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume)

keyCheck.addEventListener("click", showHideKeys)