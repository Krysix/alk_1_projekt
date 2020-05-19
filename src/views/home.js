// home.js

import $ from 'jquery';

export const home = () => {
    const fragment = $(new DocumentFragment());

    const image_preview = $(`
    <div class="img-prev">

        <div class="img-prev-slider">
            <img src='https://i.picsum.photos/id/1060/5598/3732.jpg' id="first-image">
            <img src='https://i.picsum.photos/id/2/5616/3744.jpg'>
            <img src='https://i.picsum.photos/id/31/3264/4912.jpg'>
            <img src='https://i.picsum.photos/id/366/4000/3000.jpg' id="last-image"></img>

        </div>

    </div>
    
    `);

    const buttons = $(`
    <div class="slider-buttons">
        <button class="btn" id="first-img-btn"><i class="fas fa-circle"></i></button>
        <button class="btn" id="second-img-btn"><i class="fas fa-circle"></i></button>
        <button class="btn" id="third-img-btn"><i class="fas fa-circle"></i></button>
        <button class="btn" id="fourth-img-btn"><i class="fas fa-circle"></i></button>
    </div>
    `);
    
    const informations = $(`
    <div class="info-main">
        <h1> Welcome to our SPA </h1>
        <div class="offer">
            <span id="offer-btn"> Check our </span> <button class="btn" id="check-us"> Offer </button> 
        </div>
        
        <div class="info-section"> 
            <div class="info-section-top-left">
                <h2> Welcome to our SPA </h2>
                <p> We have a rich offer of treatments <br>
                    and plentiful of rooms to satisfy everyone 
                </p>
            </div>

            <div class="info-section-top-right">
                <img src='https://i.picsum.photos/id/1060/5598/3732.jpg' id="first-info-image">
            </div>
        </div>

        <div class="info-section"> 
            <div class="info-section-mid-left">
                <img src='https://i.picsum.photos/id/1060/5598/3732.jpg' id="first-info-image">

            </div>

            <div class="info-section-mid-right">
                <h2> Welcome to our SPA </h2>
                <p> We have a rich offer of treatments <br>
                    and plentiful of rooms to satisfy everyone 
            </div>
        </div>

        <div class="info-section"> 
            <div class="info-section-bot-left">
                <h2> Welcome to our SPA </h2>
                <p> We have a rich offer of treatments <br>
                    and plentiful of rooms to satisfy everyone 
                </p>
            </div>

            <div class="info-section-bot-right">
                <img src='https://i.picsum.photos/id/1060/5598/3732.jpg' id="first-info-image">
            </div>
        </div>
        <button class="btn" id="reserve"> MAKE A RESERVATION </button>
        
    </div>
    `)


    fragment.append(image_preview);
    fragment.append(buttons);
    fragment.append(informations);


    return fragment;
};

// const singlebutton = $(`#first-img-btn`);

// singlebutton.on('click', (event) => {
//     event.preventDefault();
//     // emituje zdarzenie "routechange" (bąbelkowanie)
//     console.log('dupa');
// });