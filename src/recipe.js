let display = document.getElementById("recipe");

export function add(color) {
    display.style.opacity = '1';
    let el = document.createElement('i')
    el.classList = 'fas fa-vial  ' + color;
    display.appendChild(el);
}

export function restart() {
    display.innerHTML = '';
    display.style.opacity = '0';
}