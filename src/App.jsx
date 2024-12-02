import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Search from './components/Search'
import Details from './components/Details'
import { ProductProvider } from './context/ProductContext'

function App() {
  const [count, setCount] = useState(0)

  return (
  
  <div className='flex justify-center m-10'>
   <ProductProvider>
      <Search/>
      <div className="h-400 w-0.5 bg-gray-400"></div>
      <Details/>
   </ProductProvider>
  </div>
 
  )
}

export default App
