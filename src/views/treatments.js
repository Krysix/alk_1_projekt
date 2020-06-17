// treatments.js

import $ from 'jquery';
import { hideHomePage, hideLogin, hideDate } from './../common/index';
import { hideRegister } from './../common/index';
import { handleLogout } from './../common/index';
import { addTreatToCart } from './../cart/index';
import { addCart } from './../cart/index';
import { displayCart } from './../cart/index';

export const treatments = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();
    hideRegister();
    hideLogin();
    hideDate();
    addCart();
    displayCart();

    const welcomeRoom = $(`
    <div class="pick-rt"> <h2>Pick a treatment <i class="fas fa-spa icon-large"></i></h2> 
        
    </div>`);

    const container = $(`<div class='container'></div>`)


    fetch(`http://localhost:3000/treatments`)
        .then((response) => response.json())
        .then((treatments) => {

            treatments.map((treatment) => {

                const roomSection = $(`
        <div class="card card-body mb-3"> 
        </div
        `);
                const row = $(`
        <div class="row"> 
        </div>
        `);

                let image = $(`
        <div class="rt-image" id="treatmentPicture_${treatment.id}"> 
            <img class="rt-img" src='${treatment.imageURL}'>
        </div>`);

                let info = $(`
        <div class="rt-info" id="treatmentInfo_${treatment.id}"></div>`);

                let list = $(`    
        <ul>
                <li class="list-group-items rt-name">${treatment.name}</li>
                <li class="list-group-items"> Area of the treatment : ${treatment.area} </li>  
                <li class=" list-group-items"> Treatment duration: ${treatment.time} min. </li>  
                <li class="list-group-items"> Price: ${treatment.price} $</li>  
            </ul>
        `)
                let button = $(`<button class="btn btn-to-cart" id="rt-to-cart-${treatment.id}"> ADD TO CART  </button>`)

                button.on("click", addTreatToCart);

                info.append(list).append(button)

                row.append(image).append(info);
                roomSection.append(row);
                container.append(roomSection);
            })
        });


    container.append(welcomeRoom)

    fragment.append(container);

    $('.logoutBtn').on('click', function (e) {
        handleLogout(e)
    });

    return fragment;
};
