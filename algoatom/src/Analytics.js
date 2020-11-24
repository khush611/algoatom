import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Line } from 'react-chartjs-2';
import "./Analytics.css";

import { Link, Switch, Route } from "react-router-dom";
 import Chart from "./Chart";

function Analytics (){

    const minDate = new Date(1601510400000).toISOString().split("T")[0];

  const maxDate = new Date().toISOString().split("T")[0];
  const [start, setStart] = useState(minDate);
  const [end, setEnd] = useState(maxDate);
  const [enquiry,setEnquiry] = useState(null);

function handleEnd(event) {
  setEnd(new Date(event.target.value).toISOString().split("T")[0])
}

function handleStart(event) {
  setStart(new Date(event.target.value).toISOString().split("T")[0])
}
  useEffect(()=>{
axios.post("http://localhost:8080/getEnquiries",({
        startDate: new Date(start).getTime(),
        endDate: new Date(end).getTime(),
      }))
     .then((res) => {
       setEnquiry(res.data)
         console.log(res);
     })
     .catch((err) => console.log(err));
  },[start,end])
  return <div>
  <div className="topnav">
  <Link to="/#"><img className="image" style={{height:"40px",width:"40px"}}
  src="https://www.flaticon.com/svg/static/icons/svg/561/561127.svg" alt="logo"/></Link>
<div className="rightnav">
    <Link to="/contact">Contact Us</Link>
    <Link to="/analytics">Analytics</Link>
    <Link to="/#"><img className="image" style={{height:"20px",width:"20px"}} src="https://www.flaticon.com/svg/static/icons/svg/2089/2089702.svg" alt="pic"/></Link>
  </div>
  </div>
  <div class="wrap">
  <input className="date" type="date" value={start} onChange = {handleStart} name = "start" min={minDate} max={maxDate}/>
  <input className="date" type="date" value={end} onChange = {handleEnd} name = "end" min={minDate} max={maxDate}/>
  </div>
  <div>
  {!enquiry?null:<Chart list={enquiry} startDate={start} endDate={end} />}
  </div>
  </div>
}

export default Analytics
