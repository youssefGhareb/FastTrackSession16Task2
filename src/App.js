import React from "react";
import loader from "./loader.gif";

const App = () => {
  return <>
    <div className="imgCont">
      <img src={loader} />
    </div>
    <h1>Hello React</h1>
  </>;
};

export default App;
