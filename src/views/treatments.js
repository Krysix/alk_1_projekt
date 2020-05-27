// treatments.js

import $ from 'jquery';
import { hideHomePage, hideLogin } from './../common/index';
import { hideRegister } from './../common/index';
import { handleLogout } from './../common/index';
import { addItemToCart } from './../cart/index';
import { addCart } from './../common/index';
import { displayCart } from './../cart/index';

export const treatments = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();
    hideRegister();
    hideLogin();
    addCart();
    displayCart();

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
        <div class="col-md-7 rt-info" id="treatmentInfo_${treatment.id}"></div>`);

                let list = $(`    
        <ul>
                <li class="list-group-items rt-name">${treatment.name}</li>
                <li class="list-group-items"> Area of the treatment : ${treatment.area} </li>  
                <li class="list-group-items"> Treatment duration: ${treatment.time} min. </li>  
                <li class="list-group-items"> Price: ${treatment.price} $</li>  
            </ul>
        `)
                let button = $(`<button class="btn btn-to-cart" id="rt-to-cart-${treatment.id}"> ADD TO CART  </button>`)

                button.on("click", addItemToCart);

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
