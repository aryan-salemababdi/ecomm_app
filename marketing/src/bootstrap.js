import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


const mount = (el) => {
    ReactDOM.render(
        <App />
        ,el
    )
}

if (process.env.NODE_ENV === "development") {
    const divRoot = document.querySelector("#_marketing-div-root");
    if (divRoot) {
        mount(divRoot);
    }
};

export default mount;