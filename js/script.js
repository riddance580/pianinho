//variáveis universais

const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox_keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano_keys')

//

// funções de som da tecla

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

//

// funções de clique na tecla
const handleMouseDown = (key) => {

    playNote(key.getAttribute('data-note'));

    if (key.className.includes('black')) {
        key.classList.add('black-pressed');
        return;
    }

    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {

    if (key.className.includes('black')) {
        key.classList.remove('black-pressed');
        return;
    }
    
    key.style.background = 'white';
}

keys.forEach((key) => {

    key.addEventListener('mousedown', () => handleMouseDown(key))

    key.addEventListener('mouseup', () => handleMouseUp(key))

});

//

// Show keys

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher-active');
        keysSection.classList.remove('disabled-keys')
        return;
    }

    switcher.classList.remove('switcher-active');
    keysSection.classList.add('disabled-keys')
})

//

// Tocar com as teclas do teclado

const keyDownMapper = {
    "Tab": () => handleMouseDown(keys[0]),
    "1": () => handleMouseDown(keys[1]),
    "q": () => handleMouseDown(keys[2]),
    "2": () => handleMouseDown(keys[3]),
    "w": () => handleMouseDown(keys[4]),
    "3": () => handleMouseDown(keys[5]),
    "e": () => handleMouseDown(keys[6]),
    "4": () => handleMouseDown(keys[7]),
    "r": () => handleMouseDown(keys[8]),
    "5": () => handleMouseDown(keys[9]),
    "t": () => handleMouseDown(keys[10]),
    "6": () => handleMouseDown(keys[11]),
    "y": () => handleMouseDown(keys[12]),
    "7": () => handleMouseDown(keys[13]),
    "u": () => handleMouseDown(keys[14]),
    "8": () => handleMouseDown(keys[15]),
    "i": () => handleMouseDown(keys[16]),
    "9": () => handleMouseDown(keys[17]),
    "o": () => handleMouseDown(keys[18]),
    "0": () => handleMouseDown(keys[19]),
    "p": () => handleMouseDown(keys[20]),
    "-": () => handleMouseDown(keys[21]),
    "[": () => handleMouseDown(keys[22]),
    "=": () => handleMouseDown(keys[23])
}

const keyUpMapper = {
    "Tab": () => handleMouseUp(keys[0]),
    "1": () => handleMouseUp(keys[1]),
    "q": () => handleMouseUp(keys[2]),
    "2": () => handleMouseUp(keys[3]),
    "w": () => handleMouseUp(keys[4]),
    "3": () => handleMouseUp(keys[5]),
    "e": () => handleMouseUp(keys[6]),
    "4": () => handleMouseUp(keys[7]),
    "r": () => handleMouseUp(keys[8]),
    "5": () => handleMouseUp(keys[9]),
    "t": () => handleMouseUp(keys[10]),
    "6": () => handleMouseUp(keys[11]),
    "y": () => handleMouseUp(keys[12]),
    "7": () => handleMouseUp(keys[13]),
    "u": () => handleMouseUp(keys[14]),
    "8": () => handleMouseUp(keys[15]),
    "i": () => handleMouseUp(keys[16]),
    "9": () => handleMouseUp(keys[17]),
    "o": () => handleMouseUp(keys[18]),
    "0": () => handleMouseUp(keys[19]),
    "p": () => handleMouseUp(keys[20]),
    "-": () => handleMouseUp(keys[21]),
    "[": () => handleMouseUp(keys[22]),
    "=": () => handleMouseUp(keys[23])
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]();
})

document.addEventListener('keyup', (event) => {
    event.preventDefault();
    keyUpMapper[event.key]();
})

//

