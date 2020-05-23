// treatments.js

import $ from 'jquery';
import {hideHomePage} from './../common/index';


export const treatments = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();

    const welcomeRoom = $(`<div class="pick-rt"><h1>Pick a treatment</h1> <br>
    <h2> Have a moment for yourself!<h2>
    </div>`);
    
    const container = $(`<div class='container'></div>`)


    fetch(`http://localhost:3000/treatments`)
    .then((response) => response.json())
    .then((treatments) => {

        treatments.map((treatment) => {

        const roomSection = $(`
        <div class="card card-body mb-2"> 
        </div
        `);
        const row = $(`
        <div class="row"> 
        </div>
        `); 

        let image = $(`
        <div class="col-md-5" id="treatmentPicture_${treatment.id}"> 
            <img class="rt-image" src='${treatment.imageURL}'>
        </div>`);
        
        let info = $(`
        <div class="col-md-7 rt-info" id="treatmentInfo_${treatment.id}">
            <ul>
                <li class="list-group-items rt-name"> ${treatment.name} </li>
                <li class="list-group-items"> Area of the treatment : ${treatment.area} </li>  
                <li class="list-group-items"> Treatment duration: ${treatment.time} min. </li>  
                <li class="list-group-items"> Price: ${treatment.price} $</li>  
            </ul>
             <button class="btn" id="rt_to_cart"> ADD TO CART  </button>
        </div>
        `);

        row.append(image).append(info);
        roomSection.append(row);
        container.append(roomSection);
        })
    });


    container.append(welcomeRoom)

    fragment.append(container);

    return fragment;
};
