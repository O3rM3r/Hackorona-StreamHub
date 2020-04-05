import React from "react";
import "./loading.css"
import stream_hub_logo from "../../public/stream_hub_logo.png"

function Loading(){
    return(
        <div className="loading-overlay">
            <img src={stream_hub_logo}>hello world</img>
        </div>
   )
}

export default Loading