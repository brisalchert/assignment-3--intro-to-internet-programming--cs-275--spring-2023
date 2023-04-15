const nav = document.getElementsByTagName(`nav`)[0];
const menu = nav.firstElementChild;
const header = document.getElementsByTagName(`header`)[0];
const menuButton = document.getElementById(`menu-button`);
const modalButton = document.getElementById(`modal-button`);
const modalPanel = document.getElementsByClassName(`modal-panel`)[0];
const modalContentPane = document.getElementsByClassName(`modal-content-pane`)[0];
let breakpoint = 736;
let menuDown = false;
let sideTray = false;
let navTop = nav.clientTop;
let navLeft = nav.clientLeft;
let modalVisible = false;

window.onload = () => {
    if (window.innerWidth <= breakpoint) {
        // Reset menu to side tray
        nav.style.transition = `none`;
        menu.style.display = `block`;
        nav.style.transform = `translateY(0px)`;
        nav.style.top = `${header.clientHeight}px`;
        nav.style.left = `${(0 - menu.clientWidth)}px`;
        nav.style.justifyContent = `left`;
        menuDown = false;
        sideTray = true;
    }
};

window.onresize = () => {
    if (!sideTray) {
        if (window.innerWidth <= breakpoint) {
            // Reset menu to side tray
            nav.style.transition = `none`;
            menu.style.display = `block`;
            nav.style.transform = `translateY(0px)`;
            nav.style.top = `${header.clientHeight}px`;
            nav.style.left = `${(0 - menu.clientWidth)}px`;
            nav.style.justifyContent = `left`;
            menuDown = false;
            sideTray = true;

            // Reset modal
            if (modalVisible) {
                modalPanel.style.visibility = `hidden`;
                modalVisible = false;
            }
        }
    }
    else {
        if (window.innerWidth > breakpoint) {
            // Reset menu to drop down
            nav.style.transition = `none`;
            menu.style.display = `flex`;
            nav.style.transform = `translateX(0px)`;
            nav.style.top = `${(header.clientHeight - nav.clientHeight)}px`;
            nav.style.left = `0`;
            nav.style.justifyContent = `center`;
            menuDown = false;
            sideTray = false;

            // Reset modal
            if (modalVisible) {
                modalPanel.style.visibility = `hidden`;
                modalVisible = false;
            }
        }
    }
};

menuButton.addEventListener(`click`, () => {
    nav.style.transition = `500ms`;

    if (window.innerWidth > breakpoint) {
        if (menuDown) {
            nav.style.transform = `translateY(${navTop -= nav.clientHeight}px)`;
            menuDown = false;
        }
        else {
            nav.style.transform = `translateY(${navTop = nav.clientHeight}px)`;
            menuDown = true;
        }
    }
    else {
        if (menuDown) {
            nav.style.transform = `translateX(${navLeft -= menu.clientWidth}px)`;
            menuDown = false;
        }
        else {
            nav.style.transform = `translateX(${navLeft = menu.clientWidth}px)`;
            menuDown = true;
        }
    }
});

modalButton.addEventListener(`click`, () => {
    modalPanel.style.visibility = `visible`;
    modalVisible = true;
});

modalPanel.addEventListener(`click`, () => {
    modalPanel.style.visibility = `hidden`;
    modalVisible = false;
});

modalContentPane.addEventListener(`click`, (event) => {
    event.stopPropagation();
});

document.body.addEventListener(`keydown`, (event) => {
    const key = event.key;

    if (key === `Escape`) {
        if (modalVisible) {
            modalPanel.style.visibility = `hidden`;
            modalVisible = false;
        }
    }
});
