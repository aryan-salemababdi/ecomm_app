import { faker } from '@faker-js/faker/locale/fa';


const cartText = `<div>${faker.random.numeric()}</div>`;

document.querySelector("#cart-div").innerHTML = cartText;