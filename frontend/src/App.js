import React, { useEffect } from 'react'
import axios from'axios';
import { useState } from 'react';
const App = () => {
  const [data,setData]=useState("");

  const getData=async()=>{
    const response=await axios.get("http://localhost:5000/getData");
    setData(response.data);
  }
  useEffect(()=>{
    getData()
  },[]);
  
  return (
    <div>{data}</div>
  )
}

export default App
