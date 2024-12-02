import React from 'react'
import { ProductProvider } from '../context/ProductContext'
import Search from './Search'
import Details from './Details'


function AppLayout() {
  return (
    <div style={{ display: 'flex' }}>
    <ProductProvider>
       <Search/>
       <Details/>
    </ProductProvider>
   </div>
 
  )
}

export default AppLayout