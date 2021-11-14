import React from "react";
import ShowCompanyDetails from "./ShowCompanyDetails";

const TableAction = (props) => {
    const showData = () => {
        //setShowDetails(true);
        console.log("Show Data", props.company);
        //setCompany(props.company);
       return <ShowCompanyDetails company={props.company}/>;
    }
    return (
        <div>  
            <button type="button" className="btn btn-dark text-white" onClick={showData}>Show More</button> 
        </div>
    );
}

export default TableAction;