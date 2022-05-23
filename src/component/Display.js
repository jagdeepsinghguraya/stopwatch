import React, {useState} from 'react';
import Button from './Button';
import './Display.css'


const Display = () => {
  const [time, setTime]= useState({ms:0, s:0, m:0, h:0});
  const [interv, setinterv] = useState();
  const [status, setStatus] = useState(0);

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const start = () => {
    run();
    setinterv(setInterval(run, 10)); 
   setStatus(1);   
  };
  const pause = () => {
   clearInterval(interv);  
   setStatus(2);  
  };
  
  const restart = () => {
    start() 
    setStatus(1);  
   };
  const stop = () => {
    clearInterval(interv);  
    setTime({ms:0, s:0, m:0, h:0});  
    setStatus(0);  
   };

  const run = () =>{
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return( setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH}) )
  }
  return (
    <div className="display">
      <span>{(time.h >= 10)? time.h :   '0' +  time.h }</span>
      <span>{(time.m >= 10)? time.m :   '0' + time.m}</span>
      <span>{(time.s >= 10)? time.s :   '0' + time.s}</span>
      <span>{(time.ms >= 10)? time.ms :  '0' + time.ms}</span>
      <br />
      <Button pause={pause} restart={restart} stop ={stop} status={status} start={start}/>
    </div>
  )
}

export default Display