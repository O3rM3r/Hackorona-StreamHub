import React from 'react';
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
      
      <div className="app-days-container">
        
      </div>
      <div className="app-categories-container">

      </div>
      <div className="add-video-container">
      <button onClick={()=>{console.log('setAddFeedOpen');setAddFeedOpen(true)}} type="button">Add video</button>
      </div>
      <div className="app-feed-container">
      </div>
      <div className="add-feed-item-container">
      <Drawer anchor={'right'} open={isAddFeedOpen} onClose={toggleDrawer( false)}>
      <AddFeedItem openLoginDialog={openLoginDialog}></AddFeedItem>
      </Drawer>
      </div>
      <SocialLoginDialog  open={isLoginDialogOpen} onClose={handleLoginDialogClose} />
    </div>
    
  );
}

export default App;
