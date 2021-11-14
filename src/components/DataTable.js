import React, { useState } from 'react';

const DataTable = () => {

const companyList = [];

const initialDate = {id:0, companyName:"", companyAddress:"", companyOperations:"", phone:"",
email:"", contactPerson:""};

const [company, setCompany] = useState(initialDate);
const [showDetais, setShowDetails] = useState(false);

let company1 = {id:1, companyName:"Arlanda", companyAddress:"Arlanda Airport", companyOperations:"Aviation", phone:"0802095674",
email:"arlanda@airport.com", contactPerson:"John McLane"};

let company2 = {id:2, companyName:"Metro", companyAddress:"Metro Central Station", companyOperations:"Metros and Subways", phone:"0827099574",
email:"metro@central.com", contactPerson:"Denzel Washington"};

let company3 = {id:3, companyName:"Mountais Housing", companyAddress:"North Mountais", companyOperations:"Housing Developments", phone:"0860567674",
email:"northhousing@mountains.com", contactPerson:"The Rock"};

companyList.push(company1);
companyList.push(company2);
companyList.push(company3);

const TableHeader = () => {
   return(
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Company Name</th>
                <th scope="col">Contact Person</th>
            </tr>
        </thead>
    );
};

const TableRow = (props) => {
    return (
<tbody>
    {
        props.list.map((comp) => (
        <tr key={comp.id}>
            <td>{comp.id}</td>
            <td>{comp.companyName}</td>
            <td>{comp.contactPerson}</td>
            <td><TableAction company={comp}/></td>
        </tr>
))
    }
</tbody>
    );
};

const TableAction = (props) => {
    const showData = () => {
        setShowDetails(true);
        console.log("Show Data", props.company);
        setCompany(props.company);
    }
    return (
        <div>  
            <button type="button" className="btn btn-dark text-white" onClick={showData}>Show More</button> 
        </div>
    );
}

const ShowCompanyDetails = () => {
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




    return (
        <div className="container">
            <table className="table table-stripped">
                <TableHeader/>
                <TableRow list = {companyList}/>
            </table> 
            <br/>
            <ShowCompanyDetails/>   
        </div>
    );
};

export default DataTable;