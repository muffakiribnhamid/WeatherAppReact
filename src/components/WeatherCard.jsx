import React from 'react'

function WeatherCard({date,imgLink,temprature}) {
  return (
    <div>
        <div className="bg-slate-100 p-10 flex flex-col text-center  rounded-md">
            <p className="">{date}</p>
            <img src={imgLink} alt="" className="icon" />
            <p className="text-2xl ">{temprature} ° </p>
        </div>
    </div>
  )
}

export default WeatherCard