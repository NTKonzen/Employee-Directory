import React, { useContext } from "react";
import "./style.css"

import searchContext from "../../utils/searchContext";

function Input({ setInput }) {

    const input = useContext(searchContext)

    function handleChange(e) {
        setInput(e.target.value)
    }

    return <input placeholder="Search By First or Last Name" className="mb-5 mt-3" value={input} onChange={handleChange}></input>
}

export default Input;