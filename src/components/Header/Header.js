import React from "react";
import "./style.css"

function Header() {
    return <div className="jumbotron text-center bg-dark pb-0 px-0 rounded-0">
        <h1 className="text-light">Employee Directory</h1>
        <p className="text-light pb-5">Click on carrots to filter by heading or use the search bar to narrow your results</p>
        <hr className="styledHR p-0 m-0 border-danger"></hr>
    </div>
}

export default Header