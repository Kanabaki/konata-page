//Carousel Block
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth);

//Arrange the slides next to one another
const setSlidePosition = (slide,index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

const hideShowStars = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }else if (targetIndex === slides.length -1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
};

//When I click Left, move slides to the left
prevButton.addEventListener('click', e => {
const currentSlide = track.querySelector('.current-slide');
const prevSlide = currentSlide.previousElementSibling;
const currentDot = dotNav.querySelector('.current-slide');
 const prevDot = currentDot.previousElementSibling;
 const prevIndex = slides.findIndex(slide =>slide === prevSlide)
moveToSlide(track,currentSlide, prevSlide);
updateDots(currentDot, prevDot);
hideShowStars (slides, prevButton, nextButton, prevIndex);
});

//When I click Right, move slides to the right (move to the next slide)
nextButton.addEventListener('click', e => {
     const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide =>slide === nextSlide)
    moveToSlide(track, currentSlide, nextSlide)
    updateDots(currentDot, nextDot);
    hideShowStars (slides, prevButton, nextButton, nextIndex);
});

//When I click the nav indicatiors, move to that slide
dotNav.addEventListener  ('click', e => {
    const targetDot = e.target.closest('button');

if (!targetDot) return;
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
moveToSlide(track, currentSlide, targetSlide);
updateDots(currentDot, targetDot);
hideShowStars (slides, prevButton, nextButton, targetIndex);
});
 