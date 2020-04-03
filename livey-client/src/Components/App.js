import React,{ useState, useEffect } from 'react';
import './app.css';
import Header from "./Header"
import DaysPanel from "./DaysPanel"
import CategoryPanel from "./CategoryPanel"
import FeedPanel from './FeedPanel';
import AddFeedItem from './add-feed-item';
import SocialLoginDialog from './Social-login-dialog';
import Drawer from '@material-ui/core/Drawer';


function App() {
  //window.baseUrl="https://localhost:44375/api/";
  window.baseUrl="http://www.livey.somee.com/api/";
  const [isAddFeedOpen, setAddFeedOpen] = React.useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = React.useState(false);
  const [feedItems, setFeedItems] = React.useState(null);
  const [categories, setCategories] = React.useState(null);
   //DayPanel Filtering Function:
   const [daySelected, setDaySelected] = useState(0)
   console.log(daySelected)






  const fetchItems=async ()=>
  {
    const apiCall =await fetch(`${window.baseUrl}Items/`);
    const items=await apiCall.json();
   
    setFeedItems(items);
  }
  
  const fetchCategories=async ()=>
  {
    const apiCall =await fetch(`${window.baseUrl}Categories/`);
    const _categories=await apiCall.json();
    
    setCategories(_categories);
  }

  useEffect(() => {

    if (!feedItems)
    {
      fetchItems();
      fetchCategories();
    }
      // Update the document title using the browser API
      //document.title = `You clicked ${count} times`;
  });
  const showAddItemTab=()=>{

  }
  /*
  const getItems=()=>
  {
      fetch(`${window.baseUrl}Items/`)
      .then(response => response.json())
      .then(data => {
        if (data!=feedItems)
        setFeedItems({ data })
      });
  }*/
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
    setAddFeedOpen(false);

  }
  //console.log('categories',categories);

 

  return (

    <div className="app">
      <div className="app-header-container">
        <Header />
        <div className="add-video-container">
          <button onClick={()=>{console.log('setAddFeedOpen');setAddFeedOpen(true)}} type="button">Add video</button>
        </div>
        <div className="add-feed-item-container">
          <Drawer anchor={'right'} open={isAddFeedOpen} onClose={toggleDrawer( false)}>
          <AddFeedItem openLoginDialog={openLoginDialog}></AddFeedItem>
          </Drawer>
        </div>
          <SocialLoginDialog  open={isLoginDialogOpen} onClose={handleLoginDialogClose} />
      </div>
      <div className="app-categories-container">
        <CategoryPanel categories={categories} />
      </div>
      <div className="app-days-container">
        <DaysPanel dayChange={setDaySelected}/>
      </div>
      <div className="app-feed-container">
        <FeedPanel  feeds={feedItems} day={daySelected}/>
      </div>
    </div>

  );
}

export default App;
