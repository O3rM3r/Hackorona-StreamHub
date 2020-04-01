import React from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import './add-feed-item.css';
import {getSocialUser,setSocialUse} from '../Services/localStorageService';

function AddFeedItem({openLoginDialog}) {


 const addItem=(data)=>
  {
    fetch(`${window.baseUrl}items/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(console.log('response'));
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
    addItem(data);  /// TODO: remove this line after completing login flow!!!!!
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input


    return (<div className="AddFeedItem">
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title</label>
      <input name="ItemTitle" defaultValue="" ref={register} />
      <label>URL</label>
      <input name="ItemURL" defaultValue="" ref={register} />
      <label>Description</label>
      <input name="ItemDescription" defaultValue="" ref={register} />
      <label>Tags</label>
      <input name="ItemTags" defaultValue="" ref={register} />
      <label>StartDate</label>
      <input name="ItemStartDate" defaultValue="" ref={register} />
      <label>Duration</label>
      <input name="ItemDuration" defaultValue="" ref={register} />
      <label>Owner</label>
      <input name="ItemOwner" defaultValue="" ref={register} />
      <label>Platform</label>
      <input name="PlatformID" defaultValue="" ref={register} />
      <label>ImgURL</label>
      <input name="ItemImgURL" defaultValue="" ref={register} />
      <label>ExampleRequired</label>
     {/*<input
        name="exampleRequired"
        ref={register({ required: true, maxLength: 10 })}
      />*/
     }
      {errors.exampleRequired && <p>This field is required</p>}
      <input type="submit" />
    </form>
    </div>);
}

export default AddFeedItem;