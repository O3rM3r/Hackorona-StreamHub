import React, {Component} from "react"
import moment from "moment"
import FeedItem from "./FeedItem";
import './feed-panel.css';



class FeedPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            map: null,
            count: "0 Results"
        }
    }
    
    render(){

        const feedItems = this.props.feeds && this.props.feeds.map(item => {
            const itemDate = item.ItemStartDateObj.slice(0,10)
            const itemCategoryArr = eval(item.ItemTags)
            const itemCategory = itemCategoryArr[0]
            console.log("tagName:",itemCategory)        
            const randomImg = `https://i.picsum.photos/id/${Math.round(Math.random() * 1000)}/200/300.jpg`           
            if (this.props.dayFilter === itemDate) {
                if(this.props.catFilter === itemCategory) {
                    return <FeedItem key={item.ItemID} feed={item} image={randomImg} handleCount={this.handleCount}/>}
                else if(this.props.catFilter === null) {
                    return <FeedItem key={item.ItemID} feed={item} image={randomImg} handleCount={this.handleCount}/>}
            } else {
                return null
            } 
        })
  

        const filtered = feedItems.filter(function (el) {
        return el != null;
        });

        const results = filtered.length

        return(
            <div className="feed-panel">
                <h2 className="feed-panel-title">Search Results</h2>
                <h3 className="feed-panel-title-items">{results} Results</h3>
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