let display = document.getElementById("recipe");

export let potions = [];
export let max = 3;
export let full = false;

export function add(color) {
    if (potions.length < max)
        potions.push(color);

    if (potions.length === max) {
        full = true;
    }

    render();
}

export function restart() {
    potions = [];
    full = false;
    render();
}

function render() {

    display.innerHTML = '';

    for (let i = 0; i < max; i++) {

        let el = document.createElement('i')

        if (i < potions.length) {
            el.classList = 'fas fa-vial  ' + potions[i];
        } else {
            el.classList = 'fas fa-vial  grey';
        }
        display.appendChild(el);
    }
}

export function loadLevel({ potionsNum }) {

    max = potionsNum;

    restart();
}