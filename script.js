(() => {
    
    function onScroll(){
        const fireElem = document.querySelector('.fire');
        const burgerElem = document.querySelector('.burger');
        const chickenElem = document.querySelector('.chicken');
        const logoElem = document.querySelector('.logo');
        const textElem = document.querySelector('.scrolldown');
        const goElem = document.querySelector('.go');
        const cartoonElem = document.querySelector('.cartoon');
        const contentElem = document.querySelector('.content');


        fireElem.style.transform = `translate(${window.scrollY * -1}%, ${window.scrollY * -0.7}%) rotate(-30deg)`;
        burgerElem.style.transform = `translate(${window.scrollY * -1}%, ${window.scrollY * -2}%) rotate(-10deg)`;
        chickenElem.style.transform = `translate(${window.scrollY * 1}%, ${window.scrollY * -0.3}%) rotate(30deg)`;
        // logoElem.style.transform = `translate(${window.scrollY * 0.3}%, ${window.scrollY * -0.3}%)`;
        logoElem.style.opacity = `${ 1 - window.scrollY / 410 }`
        textElem.style.opacity = `${ 1 - window.scrollY / 210 }`
        goElem.style.opacity = `${-600 + window.scrollY}%`
        cartoonElem.style.opacity = `${-500 + window.scrollY}%`
        contentElem.style.opacity = `${-500 + window.scrollY}%`
    }

    
    function run(){
        document.addEventListener('scroll',onScroll);
    }

    run();
})();