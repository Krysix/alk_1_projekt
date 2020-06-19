// Function for using image slider on the main page

import $ from "jquery";

export function sliderControl() {
    const slider = $(".img-prev-slider");

    // Finding slider button elements in the DOM 
    const firstbtn = $('#first-img-btn');
    const secondbtn = $('#second-img-btn');
    const thirdbtn = $('#third-img-btn');
    const fourthbtn = $('#fourth-img-btn');

    // Setting initial button active
    firstbtn.css('color', '#b37436');

    // Setting starting parameters
    let counter = 1;
    let width;
    let rotateParam;

    // Calculating rotating pixel value
    function transition(counter, width) {

        // Parameters added based on the @media parameters
        if (width >= 1200 ) {
            rotateParam = -1100;
        } else if (width < 1200 && width >= 1000) {
            rotateParam = -800;
        } else if (width < 1000) {
            rotateParam = -700;
        };

        // Rorating to the needed image
      slider.css({'transform' : 'translate(' + (rotateParam * counter) +  'px)',
        'transition': 'all 1s ease-in-out'});
    }
    
    // Image buttons
    firstbtn.on('click', () => {
        width = $(window).width();
        counter = 0;
        firstbtn.css('color', '#b37436');
        secondbtn.css('color', '#202020');
        thirdbtn.css('color', '#202020');
        fourthbtn.css('color', '#202020');
        transition(counter, width);
    });

    secondbtn.on('click', () => {
        width = $(window).width();
        counter = 1;
        firstbtn.css('color', '#202020');
        secondbtn.css('color', '#b37436');
        thirdbtn.css('color', '#202020');
        fourthbtn.css('color', '#202020');
        transition(counter, width);
    });
    
    thirdbtn.on('click', () => {
        width = $(window).width();
        counter = 2;
        firstbtn.css('color', '#202020');
        secondbtn.css('color', '#202020');
        thirdbtn.css('color', '#b37436');
        fourthbtn.css('color', '#202020');
        transition(counter, width);
    });
    
    fourthbtn.on('click', () => {
        width = $(window).width();
        counter = 3;
        firstbtn.css('color', '#202020');
        secondbtn.css('color', '#202020');
        thirdbtn.css('color', '#202020');
        fourthbtn.css('color', '#b37436');
        transition(counter, width);
    });
};