import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <>
    {props.status ===0 ? <button className="btn start" onClick={props.start}>Start</button> : "" }
    {props.status ===1 ? <div>
      <button className="btn pause" onClick={props.pause}>Pause</button> 
      <button className="btn stop" onClick={props.stop}>Stop</button> 
    </div> : "" }
    {props.status ===2 ? <div>
      <button className="btn restart" onClick={props.restart}>Restart</button> 
      <button className="btn stop" onClick={props.stop}>Stop</button> 
    </div> : "" }
    
    
    </>
  )
}

export default Button