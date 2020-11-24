import React,{useState,useEffect} from "react";
import "./Contact.css";
import axios from "axios";

import { Link, Switch, Route,Redirect } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


function Contact() {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [contactsData, setContactsData] = useState([])
    const [success,setSuccess] = useState(false);


    function handleFirst(event) {
        const {name, value} = event.target
        setFirstName(value);
    }
    function handleLast(event) {
        const {name, value} = event.target
        setLastName(value);
    }

   function handleEmail(event) {
    const {name, value} = event.target
    setEmail(value);
      }
      function handleMessage(event){
        const {name, value} = event.target
    setMessage(value);
    }
    //-----validate date---
    const checkEmail = (email) =>{
    return email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}

const correctFormat = () => {
  return (
    firstName.length > 1 &&
    lastName.length > 1 &&
    message.length >= 7 &&
    checkEmail(email)
  );
};

    //-----
    function clearData(){
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }



    function handleSubmit(event) {
        event.preventDefault()

          if (!correctFormat()){
            createNotification('error');
            clearData()
            return
          }
        setContactsData(prevContacts => [...prevContacts, firstName,lastName,email,message])
        console.log(contactsData)
        axios.post("http://localhost:8080/submitEnquiries", ({
                 name: firstName+' '+lastName,
                 email: email,
                 message: message
             }))
             .then(() => {
               setSuccess(true);
                 console.log('Submitted');
                 createNotification('success');

             })
             .catch((err) => console.log(err));
clearData()

    }

const contacts = contactsData.map(contact => <h2>{contact}</h2>)

function createNotification(type){
  if(type==='success')
  NotificationManager.success(`${firstName} ${lastName}`, 'Successful submission');
  else if(type==='error'){
    NotificationManager.error(`fill details correctly: length of firstName>1 & lastName>1 & message>=7 & valid email`, 'Error in submission');
  }

}
  return (
<div>
    {success?
    <div>
  <Redirect to="/analytics"/>
</div>:
<div>
    <div className="topnav">
    <Link to="/#"><img className="image" style={{height:"40px",width:"40px"}}
    src="https://www.flaticon.com/svg/static/icons/svg/561/561127.svg" alt="logo"/></Link>
    <div className="rightnav">
      <Link to="/contact">Contact</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/#"><img className="image" style={{height:"20px",width:"20px"}} src="https://www.flaticon.com/svg/static/icons/svg/2089/2089702.svg" alt="pic"/></Link>
    </div>
    </div>
    <div className="wrapper">
  <NotificationContainer/>
       <div  className = "form-container">
      <h1>Contact Us Form</h1>

      <form onSubmit={handleSubmit}>
          <label>First Name
              <br/>
                <input
                    name="firstName"
                    value={firstName}
                    onChange={handleFirst}
                /></label>
                <br/>
                <label>Last Name
                    <br/>
                <input
                    name="lastName"
                    value={lastName}
                    onChange={handleLast}
                /></label>
                <br />
                <label>Email
                    <br/>
                <input
                    name="email"
                    value={email}
                    onChange={handleEmail}
                /></label>
                <br />
                <label>Message
                    <br/>
                <input
                type="textarea"
                    name="message"
                    value={message}
                    onChange={handleMessage}
                    className="textBox"
                /></label>
                <br />
                <button>Submit</button>
            </form>
</div>
  </div>

  </div>
}
</div>
)
}
export default Contact;
