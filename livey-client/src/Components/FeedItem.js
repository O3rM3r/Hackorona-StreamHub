import React, { Component } from 'react';
import moment from "moment"
import './feed-item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareSquare, faUser, faStar, faFlag } from '@fortawesome/free-regular-svg-icons'
import { faShareSquare as solidShare, faUser as solidUser, faStar as solidStar, faFlag as solidFlag } from '@fortawesome/free-solid-svg-icons'


//{props.feed.ItemTitle}

class FeedItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      catColor: "rgba(20, 20, 255, 0.65)",
      save: false,
      share:false,
      host: false,
      report: false,
      views: Math.round(Math.random() * 500)

    }
  this.handleSave = this.handleSave.bind(this)
  this.handleShare = this.handleShare.bind(this)
  this.handleHost = this.handleHost.bind(this)
  this.handleReport = this.handleReport.bind(this)
  }

  componentDidMount(){
    if(this.props.feed.Categories[0] === "kids"){this.setState({catColor: "rgba(241, 49, 255, 0.65)"})}
    else if(this.props.feed.Categories[0] === "lectures"){this.setState({catColor: "rgba(158, 120, 228, 0.65)"})}
    else if(this.props.feed.Categories[0] === "fitness"){this.setState({catColor: "rgba(91, 178, 206, 0.65)"})}
    else if(this.props.feed.Categories[0] === "fun"){this.setState({catColor: "rgba(32, 212, 159, 0.65)"})}
    else if(this.props.feed.Categories[0] === "other"){this.setState({catColor: "rgba(51, 190, 46, 0.65)"})}
    } 
  
  handleSave(){
    this.state.save ? this.setState({save: false}) : this.setState({save: true})
  }

  handleShare(){
    this.setState({share: true})
    const shareURL = `https://www.facebook.com/sharer/sharer.php?u=${this.props.feed.ItemURL}`
    setTimeout(() => {
      window.open(shareURL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
      this.setState({share: false})
    }, 200);
  }

  handleHost(){
    this.setState({host: true})
    setTimeout(() => {
      window.open(this.props.feed.ItemURL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
      this.setState({host: false})}, 200);
  }

  handleReport(){
    this.setState({report: true})
    setTimeout(() => {
      window.location = `mailto:roigfrey@gmail.com
                      ?subject=streamHub: I would like to report Item #${this.props.feed.ItemID}
                      &body=I would like to report the event "${this.props.feed.ItemTitle}". please list the reason for reporting below:`
                      this.setState({report: false})}, 200);
  }

  render(){  
  
  const imgURL = this.props.feed.categories && this.props.feed.categories[0]
  const timeObj = moment(this.props.feed.ItemStartDateObj).format("DD/MM | HH:mm")
  const timeEnd = moment(this.props.feed.ItemStartDateObj).add(this.props.feed.ItemDuration, "seconds").format("HH:mm")
  
    return (
      <div className="feed-item">
          <img src={this.props.image} alt="Event Image"/>
          <div className="feed-item-title">
            <h2 onClick={() => console.log(timeObj)}>{this.props.feed.ItemTitle}</h2>
            <h3>{`${timeObj}-${timeEnd}`}</h3>
          </div>
          <div className="feed-item-timelabel" style={{background: this.state.catColor}}>
            <h2>8:00</h2>
          </div>
          <div className="feed-item-description">
            <p>{this.props.feed.ItemDescription}</p>
            <a href={this.props.feed.ItemURL}>Link to Live Event</a>
          </div>
          <div className="feed-item-icons">
            <div className="feed-item-icons-class" onClick={this.handleSave}>
              <FontAwesomeIcon className="feed-item-icons-class" icon={this.state.save ? solidStar : faStar} size="lg"/>
              <h3>Save</h3>
            </div>
            <div className="feed-item-icons-class" onClick={this.handleShare}>
              <FontAwesomeIcon className="feed-item-icons-class" icon={this.state.share ? solidShare : faShareSquare} size="lg"/>
              <h3>Share</h3>
            </div>
            <div className="feed-item-icons-class" onClick={this.handleHost}>
              <FontAwesomeIcon className="feed-item-icons-class" icon={this.state.host ? solidUser : faUser} size="lg"/>
              <h3>View Host</h3>
            </div>
            <div className="feed-item-icons-class" onClick={this.handleReport}>
              <FontAwesomeIcon className="feed-item-icons-class" icon={this.state.report ? solidFlag : faFlag} size="lg"/>
              <h3>Report</h3>
            </div>
            <div className="feed-item-icons-counter">
              <h2>{this.state.views}</h2>
              <h3>Views</h3>
            </div>

          </div>
      </div>
    )
  }
}

export default FeedItem;
