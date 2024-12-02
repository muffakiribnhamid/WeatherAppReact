import React, { useEffect } from 'react'
import { Gauge } from '@mui/x-charts';
import { useProduct } from '../context/ProductContext';


function Highlights() {
    const {data,loading,error,setLocation} = useProduct()


    useEffect(() => {
        console.log(data);
        
    })

  return (

    <>
      <div className='flex'>
        <div className="uvIndex flex flex-col bg-slate-100 ml-5 p-10 mt-20 rounded-md justify-center w-60 h-43">
            <p className='text-2xl font-semibold'>UV index</p>
            <Gauge width={100} height={140} value={data.current.uv} startAngle={-90} endAngle={90} />

        </div>
        <div className="box bg-slate-100 ml-5 p-10 mt-20 rounded-md justify-center w-60 h-43">
            <p className='text-2xl font-semibold'>Wind Status</p>
            <h2 className='text-2xl mt-5 font-bold text-gray-950'>{data.current.wind_kph} km/h</h2>

        </div>
        <div className="box bg-slate-100 ml-5 p-10 mt-20 rounded-md justify-center w-60 h-43">
            <p className='text-2xl font-semibold'>Humidity</p>
            <h2 className='text-2xl mt-5 font-bold text-gray-950'>{data.current.humidity}</h2>

        </div>
        <div className="box bg-slate-100 ml-5 p-10 mt-20 rounded-md justify-center w-60 h-43">
            <p className='text-2xl font-semibold'>Preciptation</p>
            <h2 className='text-2xl mt-5 font-bold text-gray-950'>{data.current.precip_in}</h2>

        </div>
        <div className="box bg-slate-100 ml-5 p-10 mt-20 rounded-md justify-center w-60 h-43">
            <p className='text-2xl font-semibold'>Air Quality</p>
            <h2 className='text-2xl mt-5 font-bold text-gray-950'>110</h2>

        </div>
        <div className="box bg-slate-100 ml-5 p-10 mt-20 rounded-md justify-center w-60 h-43">
            <p className='text-2xl font-semibold'>Will it Rain?</p>
            <h2 className='text-2xl mt-5 font-bold text-gray-950'>{data.forecast.forecastday[0].day.daily_chance_of_rain}%</h2>

        </div>

    </div>

    <h3 className='text-3xl text-center mt-20 underline ' >Made with ❤️ by Muffakir Hamid</h3>

    </>
  )
}

export default Highlights