import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper/Wrapper';
import searchContext from "./utils/searchContext";

function App() {

  const [input, setInput] = useState(searchContext._currentValue);

  useEffect(() => {
    console.log(input)
  }, [input])
  return (
    <div>
      <searchContext.Provider value={input}>
        <Wrapper setInput={setInput}></Wrapper>
      </searchContext.Provider>
    </div>
  );
}

export default App;
