import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DefaultComponent = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default DefaultComponent