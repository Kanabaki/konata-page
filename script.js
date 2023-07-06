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
}
//When I click Left, move slides to the left


//When I click Right, move slides to the right (move to the next slide)
nextButton.addEventListener('click', e => {
     const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    moveToSlide(track, currentSlide, nextSlide)
});

//When I click the nav indicatiors, move to that slide

 