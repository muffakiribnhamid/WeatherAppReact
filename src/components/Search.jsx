import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faBullseye } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import { useProduct } from '../context/ProductContext'




function Search() {
    const {data,loading,error,setLocation} = useProduct()

    const [inputValue,setInputValue] = useState('India')

    function setFunciton(e) {
        setInputValue(e.target.value)
    }

    function handleSearch() {
        setLocation(inputValue)
    }
    
    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>No area found</h1>;
    if (!data) return <h1>No data available</h1>;

  return (
    <>
    <div className="flex flex-col m-10 ">


        <div className="input-search flex justify-center ">
        <FontAwesomeIcon className='icon size-5 m-2 ' icon={faMagnifyingGlass} />
        <input value={inputValue} onChange={setFunciton} className='input-box' type="text" placeholder='Search for places....' name="" id="" />
        <FontAwesomeIcon  onClick={handleSearch} className='size-5 flex pt-2 cursor-pointer  align-middle' icon={faBullseye} />
        </div>


        <div className="place-name text-2xl mt-10">
            {data.location.name || "Unknown Location" }
        </div>

        <div className="weather-details">
            <img className='w-60 h-60 p' src={data.current.condition.icon || ''} alt="" />
            <h1 className='text-5xl mt-20'>{data.current.temp_c || '0'} °C</h1>
            <p className='pt-20 underline '>{data.current.last_updated || '-'}</p>
        </div>
  

        <div className="weather-about"> 
            <div className="condition">
                <p className='condition-text'>
                    {data.current.condition.text  || 'Condition'}
                </p>
            </div>
        </div>



    </div>
    </>
      )
}

export default Search