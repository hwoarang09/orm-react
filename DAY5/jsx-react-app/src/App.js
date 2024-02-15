import "./App.css";
import React, { useState, Fragment } from "react";

import FChild from "./functionchild";

function App() {
  const [sample, setSample] = useState("샘플데이터");
  return (
    <>
      <div className="App">
        <div>sample is {sample}</div>
        <FChild
          companyName="엠소프트웨어"
          telephone="01022883839"
          address="서울시 하이"
          sample={sample}
          setSample={setSample}
        ></FChild>
      </div>
      <div>sample is {sample}</div>
    </>
  );
}

export default App;
