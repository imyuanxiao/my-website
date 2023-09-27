import $ from 'jquery';
//import * as jQuery from 'jquery';
import Typed from 'typed.js';
import Parallax from 'parallax-js';
import {jarallax} from 'jarallax';
import 'jquery-countto/jquery.countTo.js';

export {
    smoothScroll,
    arlo_tm_hamburger,

    animateText,
    animateParallax,
    arlo_tm_list_height,

    tdProgress,

    arlo_tm_imgtosvg,

    arlo_tm_jarallax,

    arlo_tm_miniboxes,
    initCounter,

    arlo_tm_contact_form,

}

/*NabBar NavBarMobile*/
function smoothScroll(target: string) {
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
}

/*NabBarMobile*/
function arlo_tm_hamburger(): void {
    const hamburger = $('.hamburger');
    const mobileMenu = $('.arlo_tm_mobile_menu_wrap');

    hamburger.on('click', function () {
        const element = $(this);

        if (element.hasClass('is-active')) {
            element.removeClass('is-active');
            mobileMenu.slideUp();
        } else {
            element.addClass('is-active');
            mobileMenu.slideDown();
        }
        return false;
    });
}

/*HomeHeader, HomeAbout*/
function animateText(element: HTMLElement): void {

    const options = {
        strings: [
            "Freelancer", "Designer", "Java Developer"
        ],
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

/*HomeAbout*/
function animateParallax() {
    if ($('.parallax').length > 0) {
        var scene = $('.parallax').get(0);
        var parallax = new Parallax(scene, {
            relativeInput: true,
        });
    }
}
function arlo_tm_list_height(): void {
    const div = $('.about_short_contact_wrap');
    const list = div.find('li:nth-of-type(2n)');
    list.after("<div class='clearfix'></div>");
}


/*HomeSkills*/
function tdProgress(): void {
    const progressBarEls = document.querySelectorAll('.arlo_tm_progress');
    progressBarEls.forEach((progressBar, index) => {
        const pValue = parseInt(progressBar.getAttribute('data-value') || '0', 10);
        const pColor = progressBar.getAttribute('data-color') || 'black';
        const pBarWrap = progressBar.querySelector('.arlo_tm_bar_wrap') as HTMLElement;
        const pBar = progressBar.querySelector('.arlo_tm_bar') as HTMLElement;

        pBar.style.width = `${pValue}%`;
        pBar.style.backgroundColor = pColor;
        setTimeout(() => {
            pBarWrap.classList.add('open');
        }, index * 1000);
    });
}

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const progressBarEls = document.querySelectorAll('.arlo_tm_progress');
    progressBarEls.forEach((progressBar) => {
        const rect = progressBar.getBoundingClientRect();
        const visible = rect.top < windowHeight;
        if (visible) {
            const pValue = parseInt(progressBar.getAttribute('data-value') || '0', 10);
            const pBar = progressBar.querySelector('.arlo_tm_bar') as HTMLElement;
            const pBarWrap = progressBar.querySelector('.arlo_tm_bar_wrap') as HTMLElement;
            pBar.style.width = `${pValue}%`;
            pBar.classList.add('animated');
            pBarWrap.classList.add('open');
        }
    });
});

// 在页面加载完毕时初始化进度条
window.addEventListener('load', () => {
    tdProgress();
});


/*HomeProjects*/
function arlo_tm_imgtosvg(): void {
    const svgImages = document.querySelectorAll('img.svg');

    svgImages.forEach((svgImage: HTMLImageElement) => {
        const imgClass = svgImage.getAttribute('class');
        const imgURL = svgImage.getAttribute('src');

        fetch(imgURL)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const svgDoc = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

                if (imgClass) {
                    svgDoc.setAttribute('class', `${imgClass} replaced-svg`);
                }

                svgImage.parentNode.replaceChild(svgDoc, svgImage);
            });
    });
}

/*HomeTransition*/
function arlo_tm_jarallax(): void {
    const elements = document.querySelectorAll('.jarallax');

    elements.forEach(element => {
        const customSpeed = element.getAttribute('data-speed') || '0.5';

        jarallax(element, {
            speed: parseFloat(customSpeed),
            automaticResize: true,
        });
    });
}


/*HomeCounter*/
function arlo_tm_miniboxes(): void {
    "use strict";
    const el = $('.arlo_tm_miniboxes');

    if (el.length) {
        el.each(function (index, element) {
            const child = $(element).find('.arlo_tm_minibox');
            child.css({height: 'auto'});
            // Get an array of all element heights
            const W = $(window).width();
            if (W > 480) {
                const elementHeights = child.map(function () {
                    return $(this).outerHeight();
                }).get();
                // Math.max takes a variable number of arguments
                // `apply` is equivalent to passing each height as an argument
                const maxHeight = Math.max.apply(null, elementHeights);
                // Set each height to the max height
                child.css({height: maxHeight + 'px'});
            }
        });
    }
}
function initCounter(): void {
    const options = {
        threshold: 0.8, // 设置交叉比例阈值，元素交叉视口比例达到80%时触发回调函数
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const el = $(entry.target);
            if (entry.isIntersecting && !el.hasClass('stop')) {
                el.addClass('stop').countTo({
                    refreshInterval: 50,
                    formatter: function (value, options) {
                        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                    },
                });
            }
        });
    }, options);

    $('.arlo_tm_counter').each(function () {
        observer.observe(this);
    });
}

/*HomeContact*/
function arlo_tm_contact_form(): void {
    const $contactForm = $(".contact_form");
    const $name = $contactForm.find("#name");
    const $email = $contactForm.find("#email");
    const $message = $contactForm.find("#message");
    const $subject = $contactForm.find("#subject");
    const $returnMessage = $contactForm.find(".returnmessage");
    const success = $returnMessage.data('success');

    $returnMessage.empty();

    $(".contact_form #send_message").on('click', function(){
        const name = $name.val();
        const email = $email.val();
        const message = $message.val();
        const subject = $subject.val();

        if(name===''||email===''||message===''){
            $('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
        }
        else{
            $.post("modal/contact.php", {ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject}, function(data) {
                $returnMessage.append(data);

                if($(".contact_form .returnmessage span.contact_error").length){
                    $returnMessage.slideDown(500).delay(2000).slideUp(500);
                }else{
                    $returnMessage.append("<span class='contact_success'>"+ success +"</span>");
                    $returnMessage.slideDown(500).delay(4000).slideUp(500);
                }

                if(data===""){
                    $contactForm[0].reset();
                }
            });
        }
        return false;
    });
}








