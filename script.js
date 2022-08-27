console.log("Howdy")

function playSound() {
    new Audio('24-piano-keys/key05.mp3').play()
}

const pianoKeys = document.querySelectorAll('.key')
pianoKeys.forEach(pianoKey => {
    pianoKey.addEventListener("click", playSound )
})