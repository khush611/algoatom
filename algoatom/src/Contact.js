import React,{useState} from "react";
import "./Contact.css"
function Contact() {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [contactsData, setContactsData] = useState([])
    
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
    function handleSubmit(event) {
        event.preventDefault()
        setContactsData(prevContacts => [...prevContacts, firstName,lastName,message,email])
        console.log(contactsData)
    }
  
    
const contacts = contactsData.map(contact => <h2>{contact}</h2>)
  return <div className="wrapper">
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
          
<p>{contacts}</p>
</div>
  </div>
}
export default Contact;
