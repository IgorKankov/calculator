const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .digits button, .calc .opers button, .calc .clr button, .calc .bck-spc button')
    .forEach( button => button.addEventListener('click', digitOperPressed));

function digitOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
}

document.querySelector('.calc .eq')
    .addEventListener('click', eqPressed);

function eqPressed() {
    display.value = eval(display.value);
}

document.querySelector('.calc .clr')
    .addEventListener('click', clrPressed)

function clrPressed() {
    display.value = ('')
}

document.querySelector('.calc .bck-spc')
    .addEventListener('click', bckSpcPressed)

function bckSpcPressed() {
    display.value = (display.value.substring(0, display.value.length - 1))
}
