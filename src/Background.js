import React from "react";
import theOfficeVideo from "./Videos/theOfficeVideo.mp4";
import DropDownMenu from "./DropDownMenu.js"; 


function Background(){
  return(
    <>
    <div className="main">
      <div className="overlay" />
      <video src={theOfficeVideo} autoPlay loop muted/> 
       <div className="content">
        <h1>ELSHADAY SUPPORT ENGINEER TECH EXAM</h1>
        <div className="options">
        <DropDownMenu /> 
        </div>
        </div>
    </div>
    </>
  )
}

export default Background;