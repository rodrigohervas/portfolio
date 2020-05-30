/**
 * Function that:
 * 1. adds rotation class to hamburger, so it can rotate when clicked
 * 2. adds showMenu class to nav, so it can hide row and show dorpdown links when hamburger clicked 
 * @param {String} name 
 */
const handleClick = (name) => {
    const element = document.querySelector('div.hamburger');
    element.classList.toggle('rotation');

    /* Menu visibility on click */
    const nav = document.querySelector('.menu');
    nav.classList.toggle('showMenu');
};

/**
 * Function that:
 * 1. manages showing the nav as dropdown
 * 2. manages rotating back the hamburger
 */
const closeMenu = () => {

    // if nav has class showMenu, width is small, 
    // nav should be shown as dropdown. 
    // Else, don't do anything
    const nav = document.querySelector('.menu');
    if(nav.classList[1] === 'showMenu') {
        /* hide menu on click */
        // const nav = document.querySelector('nav');
        nav.classList.toggle('showMenu');

        /* rotate back hamburger */
        const element = document.querySelector('div.hamburger');
        element.classList.toggle('rotation');
    }
};