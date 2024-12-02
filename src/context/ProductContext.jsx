import React, { createContext, useContext, useEffect, useState } from 'react'


// create context
const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const [data,setData] = useState()
    const [location,setLocation] = useState('India')
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const token = import.meta.env.VITE_WEATHER_TOKEN


    //fetch data from the api
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${token}&q=${location}&days=6&alerts=no`)
                if(!response.ok) throw new Error('Error')
                const data = await response.json()
                setData(data)


            } catch (error) {
                setError(error)
                
            }
            finally {
                setLoading(false)
            }
        };

        fetchData()
    },[location])

    return (
        <ProductContext.Provider value={{data,loading,error,setData,setLocation}}>
            {children}
        </ProductContext.Provider>
    )
}

// custom hook to use product context 
export const useProduct = () => {
    return useContext(ProductContext)
}