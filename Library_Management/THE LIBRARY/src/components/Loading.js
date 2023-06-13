import { React } from "react";

import "./Loading.css";

import gif1 from "./gif2.gif";

const Loading = (props) => {
  return (
    <div className="loading-outer">
      <div className="loading-inner1">
        <img src={gif1}></img>
      </div>
      <div className="loading-inner2">
        <p>SEARCHING</p>
      </div>
    </div>
  );
};

export default Loading;
