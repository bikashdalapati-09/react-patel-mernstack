import React from 'react'
import Accordian from './Accordian'
import { useState } from 'react'

function Home() {
  const [open, setOpen] = useState(null)
  return (
    <div className='max-w-6xl mx-auto mt-10'>
      <h1 className='font-bold text-xl '>Filter Options</h1>
      {
        ["Catagory", "Price", "Brand", "Ratings"].map((title, index) => (
        <Accordian 
        key={index} 
        title={title}
        open={index === open ? true : false}
        setOpen = {()=> setOpen(index)}
        />))
        
      }

    </div>
  )
}

export default Home