//funkcja do osbługi slidera zdjęć na stronie głównej

import $ from "jquery";

export function sliderControl() {
    const slider = $(".img-prev-slider");

    let counter = 1;

    function transition(counter) {
      slider.css({'transform' : 'translate(' + (-1100 * counter) +  'px)',
        'transition': 'all 1s ease-in-out'});
    }
    
    const firstbtn = $('#first-img-btn');
    firstbtn.on('click', () => {
        counter = 0;
        transition(counter);
    });
    const secondbtn = $('#second-img-btn');
    secondbtn.on('click', () => {
        counter = 1;
        transition(counter);
    });
    const thirdbtn = $('#third-img-btn');
    thirdbtn.on('click', () => {
        counter = 2;
        transition(counter);
    });
    const fourthbtn = $('#fourth-img-btn');
    fourthbtn.on('click', () => {
        counter = 3;
        transition(counter);
    });
};