const swiper = new Swiper('.reviews__slider', {
    loop: true,
    pagination: {
        el: '.reviews__pagination',
        clickable: true,
    },
});

// ========== animation on load ==========
let heroSubText = document.querySelector('.hero__subtext')
let heroHeader = document.querySelector('.hero__header')
let heroSuptext = document.querySelector('.hero__suptext')
let heroButton = document.querySelector('.hero__button')

window.addEventListener('load', () => {
    heroSubText.style.opacity = '0'
    setTimeout(() => heroSubText.classList.add('magictime', 'vanishIn'), 300);

    heroHeader.style.opacity = '0'
    heroSuptext.style.opacity = '0'
    heroButton.style.opacity = '0'
    setTimeout(() => {
        heroHeader.classList.add('magictime', 'vanishIn')
        heroSuptext.classList.add('magictime', 'vanishIn')
    }, 700);
    setTimeout(() => {
        heroButton.classList.add('magictime', 'vanishIn')
    }, 1300);
})

// ========== on scroll add animation classes ==========
const animItems = document.querySelectorAll('.anim_item')
let advantagesItems = document.querySelectorAll('.advantages__item')
let historyImgGroup = document.querySelectorAll('.history__img')
let holidayDescription = document.querySelectorAll('.holiday__description')
let holidayButton = document.querySelectorAll('.holiday__button')
let menuItem = document.querySelectorAll('.menu__item')
let galleryWide = document.querySelectorAll('.gallery__wide')
let gallerySmall = document.querySelectorAll('.gallery__small')
let cooksItem = document.querySelectorAll('.cooks__item')

animStyles(advantagesItems, 0, 300)
animStyles(historyImgGroup, 0, 300)
animStyles(holidayDescription, 0, 400)
animStyles(holidayButton, 0, 400)
animStyles(menuItem, 0, 0)
animStyles(gallerySmall, 0, 300)
animStyles(galleryWide, 0, 500)
animStyles(cooksItem, 0, 500)

if (animItems.length > 0) {
    function animOnScroll(items) {
        for (let i = 0; i < items.length; i++) {
            const animItem = items[i]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = window.scrollY + animItem.getBoundingClientRect().top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if ((window.scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                // boingInUp:
                ifElHasClassAddAnim(animItem, 'advantages__item', 'magictime, boingInUp')

                // slideLeftReturn:
                ifElHasClassAddAnim(animItem, 'history__header, history__numbers', 'magictime, slideLeftReturn')

                // vanishIn:
                ifElHasClassAddAnim(animItem, 'history__text, holiday__description, holiday__button, dish__name, dish__dotted, dish__coin',
                    'magictime, vanishIn')

                // swashIn:
                ifElHasClassAddAnim(animItem, 'history__img, cooks__item', 'magictime, swashIn')

                // puffIn:
                ifElHasClassAddAnim(animItem, 'menu__header, allTitle, menu__item', 'magictime, puffIn')

                // foolishIn:
                ifElHasClassAddAnim(animItem, 'dish__left', 'magictime, foolishIn')

                // perspectiveRightReturn:
                ifElHasClassAddAnim(animItem, 'dish__img-s', 'magictime, perspectiveRightReturn')

                // swap:
                ifElHasClassAddAnim(animItem, 'gallery__small, gallery__wide', 'magictime, swap')

            } else {
                if (!animItem.classList.contains('_anim-no-repeat')) {
                    animItem.classList.remove('_anim-init')
                }
            }
        }
    }
}
window.addEventListener('scroll', () => {
    animOnScroll(animItems)
})

function animStyles(items, opacity, animDelay) {
    for (let e of items) {
        e.style.opacity = `${opacity}`
        if (animDelay != 0) e.style.animationDelay = `${animDelay}ms`;
    }
}
function ifElHasClassAddAnim(element, haveClass, animations) {
    for (let e of animations.split(',')) {
        for (let c of haveClass.split(',')) {
            if (element.classList.contains(c.trim())) element.classList.add(e.trim());
        }
    }
}



