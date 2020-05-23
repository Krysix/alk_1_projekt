// rooms.js

import $ from 'jquery';
import {hideHomePage} from './../common/index';

export const rooms = () => {
    const fragment = $(new DocumentFragment());

    hideHomePage();

    const welcomeRoom = $(`<div class="pick-rt"><h1>Pick a room</h1> <br>
    <h2> Come be our guest!<h2>
    </div>`);
    
    const container = $(`<div class='container'></div>`)


    fetch(`http://localhost:3000/rooms`)
    .then((response) => response.json())
    .then((rooms) => {

      rooms.map((room) => {

        const roomSection = $(`
        <div class="card card-body mb-2"> 
        </div
        `);
        const row = $(`
        <div class="row"> 
        </div>
        `); 

        let image = $(`
        <div class="col-md-5" id="roomPicture_${room.id}"> 
            <img class="rt-image" src='${room.imageURL}'>
        </div>`);
        
        let info = $(`
        <div class="col-md-7 rt-info" id="roomInfo_${room.id}">
            <ul>
                <li class="list-group-items rt-name"> ${room.name} </li>
                <li class="list-group-items"> Number of beds : ${room.beds} </li>  
                <li class="list-group-items"> Maximum number of residents: ${room.guests} </li>  
                <li class="list-group-items"> Price: ${room.price} $</li>  
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
}
