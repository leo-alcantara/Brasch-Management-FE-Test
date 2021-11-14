import React, { useEffect, useState } from "react";

const ShowCompanyDetails = (props) => {

    const initialData = {id:0, companyName:"", companyAddress:"", companyOperations:"", phone:"",
                        email:"", contactPerson:""};    
    const [company, setCompany] = useState(initialData);
    const [showDetais, setShowDetails] = useState(false);

    useEffect(() => {
        setCompany(props.company);
    },[]);
    if(showDetais){
        return(<div className="card">
            <div className="card-header">
                Company Information
            </div>
            <div className="card-body">
                <h5 className="card-title">Company Name: {company.companyName}</h5>
                <h5 className="card-title">Company Address: {company.companyAddress}</h5>
                <h5 className="card-title">Company Operations: {company.companyOperations}</h5>
                <h5 className="card-title">Company Phone Number: {company.phone}</h5>
                <h5 className="card-title">Company E-mail Address: {company.email}</h5>
                <h5 className="card-title">Company Contact Person: {company.contactPerson}</h5>
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-outline-dark" onClick={() => {setShowDetails(false); setCompany({company})}}>Hide Details</button>
            </div>

        </div>
            );
    } else {
        return ("");
    }
    
};

export default ShowCompanyDetails;