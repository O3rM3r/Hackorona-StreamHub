import React, {Component} from "react"
import moment from "moment"
import FeedItem from "./FeedItem";
import './feed-panel.css';



class FeedPanel extends Component{
    constructor(props){
        super(props)
    
    }

    render(){

        const feedItems = this.props.feeds && this.props.feeds.map(item => {
            const itemDate = item.ItemStartDateObj.slice(0,10)
            const randomImg = `https://i.picsum.photos/id/${Math.round(Math.random() * 1000)}/200/300.jpg`           
            if (this.props.dayFilter === itemDate) {
                return  <FeedItem key={item.ItemID} feed={item} image={randomImg}/>
            } else {
                return null
            } 
        })

        return(
            <div className="feed-panel">
                <div className="feed-scroll-container">
                    <div className="feed-item-container">
                        {feedItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedPanel