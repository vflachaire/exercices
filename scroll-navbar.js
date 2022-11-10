const navBar = document.querySelector('nav');
let scroll = window.scrollY;

window.addEventListener('scroll', () => {
    
    let newScroll = window.scrollY;
    console.log(newScroll + " : " + scroll);
    if (newScroll > scroll ) {
        navBar.style.top = -50 + "px";
    }
    else {
        navBar.style.top = 0;
    }
    scroll = newScroll;
})
 