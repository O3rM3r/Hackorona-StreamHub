import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
//import './Social-login-dialog.css';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});


function SocialLoginDialog(props) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    console.log('handleClose');
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Please Login</DialogTitle>
      <div style={{margin:"20px 20px"}}>
     
      <Button onClick={()=>handleClose()}
      style={{
        
        backgroundColor: "#21b6ae",
      
        magin: "18px 36px",
        fontSize: "18px",
        width:"150px",
        "&:hover": {
          background: "#efefef"
        }
    }}
    variant="contained"
      className="social-login-btn">Facebook</Button>
      <div style={{height:"30px"}}></div>
      <Button  onClick={()=>handleClose()}
      style={{
        
        backgroundColor: "#21b6ae",
        magin: "18px 36px",
        fontSize: "18px",
        width:"150px",
        ":hover": {
          background: "#efefef"
        }
    }}
    variant="contained"
      className="social-login-btn">Google</Button>
      </div>
    </Dialog>
  );
}

SocialLoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SocialLoginDialog;