import React from 'react';
import './app.css';
import Header from "./Header"
import DaysPanel from "./DaysPanel"
import CategoryPanel from "./CategoryPanel"
import FeedPanel from './FeedPanel';
import './App.css';
import AddFeedItem from './add-feed-item';
import SocialLoginDialog from './Social-login-dialog';
import Drawer from '@material-ui/core/Drawer';

function App() {

  const [isAddFeedOpen, setAddFeedOpen] = React.useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = React.useState(false);
  const showAddItemTab=()=>{

  }
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
  return (

<div className="app">
  <div className="app-header-container">
    <Header />
  </div>
  <div className="app-categories-container">
    <CategoryPanel />
  </div>
  <div className="app-days-container">
    <DaysPanel />
  </div>
  <div className="app-feed-container">
    <FeedPanel />
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
</div>

  );
}

export default App;
