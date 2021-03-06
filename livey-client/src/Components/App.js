import React,{ useState, useEffect,useRef,createRef } from 'react';
import moment from "moment"
import './app.css';
import Header from "./Header"
import DaysPanel from "./DaysPanel"
import CategoryPanel from "./CategoryPanel"
import FeedPanel from './FeedPanel';
import AddFeedItem from './add-feed-item';
import SocialLoginDialog from './Social-login-dialog';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import  Logo from './Logo';
import {getSocialUser,setSocialUser} from '../Services/localStorageService'
import Loading from "./Loading"

import clsx from 'clsx';



import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ReactGA from 'react-ga';
//import db from "./db.json"

function App() {

  let myRef;
 
  //window.baseUrl="https://localhost:44375/api/";
  window.baseUrl="http://www.livey.somee.com/api/";
  const [isAddFeedOpen, setAddFeedOpen] = React.useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = React.useState(false);
  const [feedItems, setFeedItems] = React.useState(null);
  const [filteredFeedItems, setFilteredFeedItems] = React.useState(null);
  const [categories, setCategories] = React.useState(null);
  const [autoComleteFeed,setAutoComleteFeed]= React.useState([]);
  const [isFetchedData,setIsFetchedData]= React.useState(false);
  ReactGA.initialize('UA-162926417-1');
  ReactGA.pageview("/app");
  //  const [isFeedDialogOpen, handleFeedDialogChange] = useState(false);
  //DayPanel Filtering Function:
  const [daySelected, setDaySelected] = useState(moment().format('YYYY-MM-DD'))
  const [catSelected, setCatSelected] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const childSocialLoginRef = createRef();

  console.log(childSocialLoginRef.current);
  console.log("hello world");
  const fetchItems=async ()=>
  {
   
    const apiCall =await fetch(`${window.baseUrl}Items/`);
    const items=await apiCall.json();
    //const items = db
    console.log('items',items);
     top100Films.push({ title: 'The Shawshank Redemption', year: 1994 });
     setAutoComleteFeed(items);
    setFeedItems(items);
    setFilteredFeedItems(items)
    setIsLoading(false)
  }
  
 const fetchCategories=async ()=>
 {
    const apiCall =await fetch(`${window.baseUrl}Categories/`);
    const _categories=await apiCall.json();
    
    setCategories(_categories);
  }

  useEffect(() => {

    if (!isFetchedData)
    {
      setIsFetchedData(true);
      fetchItems();
      fetchCategories();
    }
      // Update the document title using the browser API
      //document.title = `You clicked ${count} times`;
  });
  
  const  openLoginDialog=()=>{
    console.log('openLoginDialog');
    setLoginDialogOpen(true);

  }
 
  const handleLoginDialogClose=()=>
  {
    setLoginDialogOpen(false);
    setAddFeedOpen(false);
  }
  const toggleDrawer = (anchor, open) => (event) => {
    
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //setAddFeedOpen(false);
    //setLoginDialogOpen(false);
    

  }
  const doLogout=()=>
  {

  }
  let top100Films=[];
  let  defaultProps = {
    options: autoComleteFeed,
    getOptionLabel: (option) => option.ItemTitle,
  };
  const handleLogoClick = () => {
    window.location.reload()
   }
  //console.log('categories',categories);

  if (isLoading) return (<Loading />)
  return (

    <div className="app">
      
      <div className="app-header-container">
        {/* <h1>{catSelected}</h1> Testing */}
      <div style={{marginLeft:30}}>
      <img src={require('./StreamHub_Logo.png')} style={{width:240, cursor: "pointer"}} onClick={handleLogoClick}/>
      </div>
      <div  style={{marginLeft:300}}>
      
      { true && /*autoComleteFeed.length>0*/ <Autocomplete className="app-autocomple" style={{width:300,height:60}}
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => <TextField {...params} label="search" margin="normal" />}
      />}
     {/*<input 
      name="searchInput"
      type="text"
      placeholder="Search..."
  className="header-search"/>*/}
  </div>
    <div style={{marginLeft:"auto",marginRight:30}}>
      <Button style={{marginTop:30}} variant="contained" onClick={()=>{console.log('setAddFeedOpen');setAddFeedOpen(true)}} type="button">Add Event</Button>
    </div>
    {true /*!getSocialUser()*/ &&
    <div  style={{marginRight:30}}>
      <Button style={{marginTop:30,marginLeft:"auto"}} variant="contained" onClick={()=>{console.log('setAddFeedOpen');setLoginDialogOpen(true)}} type="button">Login</Button>
    </div>
    }
    { false/*getSocialUser()*/ &&
    <div  style={{marginRight:30}}>
    <Button style={{marginTop:30,marginLeft:"auto"}} variant="outlined" onClick={()=>{console.log('setAddFeedOpen');  childSocialLoginRef.current.doLogout()}} type="button">Logout</Button>
  </div>
    }
        {/*<Header />*/}
        <div className="add-video-container">
       
        </div>
        
        <div className="add-feed-item-container">
       
          {/*<Drawer ref={myRef} anchor={'right'} open={isAddFeedOpen} onClose={toggleDrawer( false)}>*/}
          
          
          <AddFeedItem openLoginDialog={openLoginDialog} openAddFeedDialog={isAddFeedOpen}  handleAddFeedClose={()=>setAddFeedOpen(false)}></AddFeedItem>
          
        
         {/* </Drawer>*/}
         
       
        </div>
          <SocialLoginDialog  open={isLoginDialogOpen} onClose={handleLoginDialogClose}  ref={childSocialLoginRef}/>
      </div>
      <div className="app-categories-container">
        <CategoryPanel categories={categories} cat={setCatSelected}/>
      </div>
      <div className="app-days-container">
        <DaysPanel dayChange={setDaySelected} day={setDaySelected}/>
      </div>
      <div className="app-feed-container">
        <FeedPanel  feeds={feedItems} dayFilter={daySelected} catFilter={catSelected}/>
      </div>
    </div>

  );
}

export default App;
