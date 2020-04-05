import React from "react";
import "./loading.css"
import stream_hub_logo from "../stream_hub_logo.png"

function Loading(){
    return(
        <div className="loading-overlay">
            <img src={stream_hub_logo} alt="Logo"/>
            <div className="loader-container">
                <div className="loader">Loading...</div>
            </div>
        </div>
   )
}

export default Loading