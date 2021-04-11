import React, {useState} from 'react';
import Data from './Data';
import Alt from './Alt';
import './style.css';
const  App = () => {
  const [index,setindex] = useState(0);
  return(
    <>
    <div className="slider">
      <img  src={Data[index]} alt={Alt[index]} />
      </div>

      <div className="btns">
      <button onClick={() =>{
        setindex(0);
      }}></button>
      <button onClick={() =>{
        setindex(1);
      }}></button>
      <button onClick={() =>{
        setindex(2);
      }}></button>
      <button onClick={() =>{
        setindex(3);
      }}></button>
      <button onClick={() =>{
        setindex(4);
      }}></button>
      <button onClick={() =>{
        setindex(5);
      }}></button>
      <button onClick={() =>{
        setindex(6);
      }}></button>
      <button onClick={() =>{
        setindex(7);
      }}></button>
      <button onClick={() =>{
        setindex(8);
      }}></button>
      <button onClick={() =>{
        setindex(9);
      }}></button>
      <button onClick={() =>{
        setindex(10);
      }}></button>
      <button onClick={() =>{
        setindex(11);
      }}></button>
      <button onClick={() =>{
        setindex(12);
      }}></button>
      <button onClick={() =>{
        setindex(13);
      }}></button>
      <button onClick={() =>{
        setindex(14);
      }}></button>
      </div>
    </>
  )
}

export default App;
