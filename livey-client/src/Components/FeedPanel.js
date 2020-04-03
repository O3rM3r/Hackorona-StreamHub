import React, {Component} from "react"
import moment from "moment"
import FeedItem from "./FeedItem";
import './feed-panel.css';
import RangeSlider from "./RangeSlider"



class FeedPanel extends Component{
    constructor(props){
        super(props)
        //state 
    
    }

    render(){
        const feedItems = this.props.feeds && this.props.feeds.map(item => {
           if (this.props.daySelected === itemDate) {
            //const itemDate = moment(`/Date(${item.ItemStartDate})/`)//make same as daySelected syntax
                return  <FeedItem key={item.ItemID} feed={item} />
            } else {
                return null
            } 
        })

        return(
            <div className="feed-panel">
                <div className="feed-panel-filter">
                    <RangeSlider/>
                </div>
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