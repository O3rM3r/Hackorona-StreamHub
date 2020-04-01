import React, {Component} from "react"
import FeedItem from "./FeedItem";


class FeedPanel extends Component{
    constructor(props){
        super()
        this.state={

        }
    
    }

    render(){
        return(
            <div className="feed-panel">
                <h1>FEED PANEL</h1>
                {this.props.feeds && this.props.feeds.map((feed)=>
                    {
                        return  <FeedItem feed={feed} />
                    })}
            </div>
        )
    }
}

export default FeedPanel