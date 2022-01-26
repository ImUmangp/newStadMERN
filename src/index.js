import React from 'react';
import ReactDOM from 'react-dom';

const name ="UmangPandey";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
  <h1>Challenge#1</h1>
    <h2>Umang's Netflix pick</h2>
    <p>Here's the list of my fav 6 netflix series</p>
    <ol>
      <li>Dark</li>
      <li>Mr Robot</li>
      <li>Lucifer</li>
      <li>My Holo Love</li>
      <li>Money Heist</li>
    </ol>
 
  <h1>Challenge#2</h1>
    <h2>My name is {name}</h2>
    <p>Current Date is = {currDate}</p>
    <p>Current Time is = {currTime} </p>

  </>,
  document.getElementById("root")
);
