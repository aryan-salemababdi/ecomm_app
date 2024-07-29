import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import MarketingApp from './components/Marketing/MarketingApp';
import Header from "./components/Header/Header";

export default () => {
    return (
        <BrowserRouter>
            <>
                <Header />
                <MarketingApp />
            </>
        </BrowserRouter>
    )
}