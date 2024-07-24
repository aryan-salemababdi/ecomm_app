import { faker } from "@faker-js/faker/locale/fa";

const mount = (e) => {
    let products = "";

    for (let i = 0; i < 234; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    e.innerHTML = products
}

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#div-products");
    if (el) mount(el)
}


export default mount;