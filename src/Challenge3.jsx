import React from "react";
import "./index.css";
function Chall3( ){

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
    return (
        <>
             <div>
  <h1>Challenge#03</h1>
  <p>Greets According to Time:</p>
  <h3 >Hello Sir,<span style={cssStyle}>{greeting}</span></h3>  
  </div>
        </>
    );
}
export default Chall3;