import React, { useContext } from "react";
import { results } from "../../employees.json";

import searchContext from "../../utils/searchContext";

function Table() {

    const employees = results.sort((a, b) =>
        (a.name.last > b.name.last) ? 1 : -1
    )

    // const [employeeList, setEmployeeList] = useState(employees);
    const input = useContext(searchContext);

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employeeObj => {
                    if (employeeObj.name.first.toLowerCase().startsWith(input.toLowerCase()) || employeeObj.name.last.toLowerCase().startsWith(input.toLowerCase())) {
                        const DOB = new Date(employeeObj.dob.date).toLocaleDateString()
                        return (
                            <tr key={employeeObj.email + employeeObj.dob.date}>
                                <td><img alt={`${employeeObj.name.first} ${employeeObj.name.first}`} src={employeeObj.picture.thumbnail}></img></td>
                                <td>{`${employeeObj.name.title} ${employeeObj.name.first} ${employeeObj.name.last}`}</td>
                                <td>{employeeObj.cell}</td>
                                <td>{employeeObj.email}</td>
                                <td>{DOB}</td>
                            </tr>
                        )
                    } else {
                        return false;
                    }
                })}
            </tbody>
        </table>
    )
}

export default Table;