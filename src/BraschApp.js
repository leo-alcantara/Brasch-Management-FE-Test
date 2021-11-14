import React from "react";
import DataTable from "./components/DataTable";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


const BraschApp = () => {
    return (
        <div className="container">
        <div>
               <NavBar/>           
        </div>
        <div>
            <DataTable/>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
    );
};

export default BraschApp;