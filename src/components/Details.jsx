import React, { useEffect } from 'react'
import WeatherCard from './WeatherCard'
import { useProduct } from '../context/ProductContext'
import Highlights from './Highlights';

function Details() {
  const {data,loading,error,setLocation} = useProduct()


  if (loading) return <h1>Loading</h1>;
  if (error) {
    return (
      <div>
        <h1>No area found</h1>
        <button onClick={setLocation('India')}>Back</button>
      </div>
    )
  }
  if (!data) return <h1>No data available</h1>;


  useEffect(() => {
    console.log(data.forecast);
    
  })
  // if (error) return <h1>Error</h1> 
  return (

    
  
    <div className='main-details-full m-20 '>

      <div className="top-section-card flex gap-20 justify-center ">
      <WeatherCard temprature={data.forecast.forecastday[0].day.maxtemp_c} imgLink={data.forecast.forecastday[0].day.condition.icon} date={data.forecast.forecastday[0].date}  />
      <WeatherCard temprature={data.forecast.forecastday[1].day.maxtemp_c} imgLink={data.forecast.forecastday[1].day.condition.icon} date={data.forecast.forecastday[1].date}  />
      <WeatherCard temprature={data.forecast.forecastday[2].day.maxtemp_c} imgLink={data.forecast.forecastday[2].day.condition.icon} date={data.forecast.forecastday[2].date}  />

      </div>

      <h1 className='highlights text-5xl mt-10'>Todays Highlights</h1>

      <div className="highlights">
        <Highlights/>
              {/* <Gauge width={100} height={200} value={90} startAngle={-90} endAngle={90} /> */}

      </div>
    </div>
  )
}

export default Details