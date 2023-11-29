import React, { useState } from 'react'
import ax from 'axios'

function Weatherapi({check,name}) {
  var key="403a420186a06fde3ea32cac13430a73";
  var city=name;
  var [data,setData]=useState();
  
 const fetchData=async()=>{
  try{
    const response = await  ax.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    console.log(response.data);
    setData(response.data);
  }catch(err){
    alert(`There is an err : ${err}`)
  }
 }
 (check)?fetchData():console.log(`No Going FetchData`);
  return (
    <div>
      {
        data&&(
          <div className=' border border-white rounded-sm my-5'>
          <div className=' font-bold text-3xl text-white flex flex-row gap-4 px-5 py-5'>
          <h1>Country : {data.sys.country}</h1>
          <div>
            <h1> Temp:{Math.round(data.main.temp)} C*</h1>
          </div>
            </div>
            </div>
        )
      }
    </div>

  )
}

export default Weatherapi