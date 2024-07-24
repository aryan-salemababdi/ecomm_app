import { faker } from '@faker-js/faker/locale/fa';


const mount = (el) => {

    const cartText = `<div>${faker.random.numeric()}</div>`;

    el.innerHTML = cartText;
};


if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#div-products");
    if (el) mount(el)
};


export { mount };
