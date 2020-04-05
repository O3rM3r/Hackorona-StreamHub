import 'date-fns';
import React,{useState} from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import './add-feed-item.css';
import {getSocialUser,setSocialUse} from '../Services/localStorageService';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

function AddFeedItem({openLoginDialog,openAddFeedDialog,handleAddFeedClose}) {

  
  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedTime, handleTimeChange] = useState(new Date());
  const [duration, setDuration] = useState(new Date());
  
  const handleFeedDialogClose=()=>
  {
    handleAddFeedClose(false);
  }
 const addItem=(data)=>
  {
    data.PlatformID=1;
    data.ItemStartDateObj =selectedDate;
    fetch(`${window.baseUrl}items/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(()=>{console.log('response')
    handleFeedDialogClose();
  });
  }
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    if (!getSocialUser())
    {
        openLoginDialog();
    }
    else
    {
      addItem(data);
    }
    console.log(data);
  
    //addItem(data);  /// TODO: remove this line after completing login flow!!!!!
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input


    return (
      <Dialog onClose={()=>{console.log('onclose'); handleFeedDialogClose();}} aria-labelledby="simple-dialog-title" open={openAddFeedDialog}>
      {/*<DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>*/}
    <div className="AddFeedItem">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formFlex">
        <div>
        <label>Titley</label>
        <input name="ItemTitle" defaultValue="" ref={register} />
        <label>URL</label>
        <input name="ItemURL" defaultValue="" ref={register} />
        <label>Description</label>
        <input name="ItemDescription" defaultValue="" ref={register} />
        <label>Tags</label>
        <input name="ItemTags" defaultValue="" ref={register} />
        <label>Start Time</label>
        <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        ref={register} 
      />
        {/*<label>StartDate</label>
        <input name="ItemStartDate" defaultValue="" ref={register} />*/}
        </div>
     
        <div style={{marginLeft:30}}>
        <label>Duration</label>
        <InputMask name="duration" mask="99:99:99" defaultValue="01:00:00" maskChar=" " ref={register} />
        <label>Owner</label>
        <input name="ItemOwner" defaultValue="" ref={register} />
        <label>Platform</label>
        <input name="PlatformID" defaultValue="" ref={register} />
        <label>ImgURL</label>
        <input name="ItemImgURL" defaultValue="" ref={register} />
        
      {/*<input
          name="exampleRequired"
          ref={register({ required: true, maxLength: 10 })}
        />*/
      }
        {errors.exampleRequired && <p>This field is required</p>}
       
        </div>
        </div>
        <input type="submit" />
      </form>
    </div>
    </Dialog>
    );
}

export default AddFeedItem;