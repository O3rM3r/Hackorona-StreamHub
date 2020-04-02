import React, {Component} from "react"
import FeedItem from "./FeedItem";
import './feed-panel.css';


class FeedPanel extends Component{
    constructor(props){
        super(props)
        //state {feedItems}
    
    }

    render(){
        const feedItems = this.props.feeds && this.props.feeds.map(item => {
                return  <FeedItem key={item.ItemID} feed={item} />
            })

        return(
            <div className="feed-panel">
                <h1 className="feed-panel-filter">Filter 6AM--------------------------6AM</h1>
                <div className="feed-item-container">
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                </div>
            </div>
        )
    }
}

export default FeedPanel