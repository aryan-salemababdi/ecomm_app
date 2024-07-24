import { faker } from "@faker-js/faker/locale/fa";

let products = "";

for (let i = 0; i < 234; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
}

document.querySelector("#div-products").innerHTML = products;