import React from "react";
import TableAction from "./TableAction";

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

export default TableRow;