let buttons = document.querySelectorAll('.btn-tab');
let tabs = document.querySelectorAll('.food-container');
let home = document.getElementsByClassName('initial-tab')[0];

function showTab(idx) {
    tabs.forEach((tab, i) => {
        if (i == idx) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

buttons.forEach((button, idx) => {
    button.addEventListener('click', () => showTab(idx));
});
