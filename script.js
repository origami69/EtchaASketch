let color = 'black'

function waifuBoard(size) {
    let simp = document.querySelector('.board');
    let squares = simp.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    simp.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    simp.style.gridTemplateRows = `repeat(${size}, 1 fr)`;
    let number = size * size
    for (let i = 0; i < number; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', squareColor);
        square.style.backgroundColor = 'white';
        simp.insertAdjacentElement('beforeend', square);
    }
}

waifuBoard(16);

function thighSize(input) {
    if (input >= 2 && input <= 100) {
        waifuBoard(input);
    } else {
        console.log("error");
    }
}

function squareColor() {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random()*300},100%,50%)`
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choose) {
    color = choose;
}

function reZero() {
    let simp = document.querySelector('.board');
    let squares = simp.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}