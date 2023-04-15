const menu = document.getElementsByTagName(`nav`)[0];
const menuButton = document.getElementById(`menu-button`);
const modalButton = document.getElementById(`modal-button`);
let menuDown = false;
let menuTop = menu.clientTop;

window.onload = () => {
    console.log(menuTop);
};

menuButton.addEventListener(`click`, () => {
    if (menuDown) {
        console.log(menuTop);
        console.log(menu.clientHeight);
        menu.style.transform = `translateY(${menuTop -= menu.clientHeight}px)`;
        menuDown = false;
    }
    else {
        console.log(menuTop);
        console.log(menu.clientHeight);
        menu.style.transform = `translateY(${menuTop += menu.clientHeight}px)`;
        menuDown = true;
    }
});
