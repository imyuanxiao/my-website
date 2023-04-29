import Typed from 'typed.js';
import $ from 'jquery';

export function animateText(element: HTMLElement): void {

    const options = {
        strings: ["Freelancer", "Graphic Designer", "Java Developer"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
        backDelay: 2000,
        startDelay: 1000,
    };
    if (element) {
        new Typed(element, options);
    }

}

export function smoothScroll(target: string) {
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
}