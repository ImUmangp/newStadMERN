import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const name ="UmangPandey";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

let curDate=new Date();
curDate=curDate.getHours();
let greeting='';

const cssStyle = { };

if(curDate>=1 && curDate<12){
  greeting='Good MOrning';
  cssStyle.color ='green';
}else if(curDate>=12 && curDate<19){
   greeting='Good Afternoon';   
  cssStyle.color ='Orange';
}else{
  greeting='Good Night';  
  cssStyle.color ='Yellow';
}



ReactDOM.render(
  <>
  <h1>Challenge#01</h1>
    <h2>Umang's Netflix pick</h2>
    <p>Here's the list of my fav 6 netflix series</p>
    <ol>
      <li>Dark</li>
      <li>Mr Robot</li>
      <li>Lucifer</li>
      <li>My Holo Love</li>
      <li>Money Heist</li>
    </ol>
 
  <h1>Challenge#02</h1>
    <h2>My name is {name}</h2>
    <p>Current Date is = {currDate}</p>
    <p>Current Time is = {currTime} </p>
  <div>
  <h1>Challenge#03</h1>
  <p>Greets According to Time:</p>
  <h3 >Hello Sir,<span style={cssStyle}>{greeting}</span></h3>  
  </div>
  </>,
  document.getElementById("root")
);
