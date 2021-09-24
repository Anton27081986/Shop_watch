import { postData } from './postData.js';
import {getData} from './getData.js';


export class ApiInteraction {
    static createNewCard(data) {
        postData('https://shop-watch-81f60-default-rtdb.firebaseio.com/card.json', data);
    }
    static getCard() {
        getData('https://shop-watch-81f60-default-rtdb.firebaseio.com/card.json')
        .then(data => Object.values(data))
        .then(data => {
            data.forEach(item => {
                document.querySelector('.new__arrivals__cards').insertAdjacentHTML('afterbegin', `
                    <div class="card" style="display: flex">
                        <div style="margin-left: 100px; margin-top: 40px">
                            <img style="background-color: white; width: 220px; height: 320px;" class="img" src="${item.url}" alt="">
                            <p style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.name}</p>
                            <p style="color: white; font-family: 'Playfair Display'; font-size: 18px">${item.price} ${item.currency}</p>
                        </div>
                    </div>
                `);
            });
        });
    }
}



