import React from "react";

function Chall2(){

    const name ="UmangPandey";
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    
    return (
        <>
             <h1>Challenge#02</h1>
        <h2>My name is {name}</h2>
        <p>Current Date is = {currDate}</p>
        <p>Current Time is = {currTime} </p>
        </>
       
    );
}
export default Chall2;