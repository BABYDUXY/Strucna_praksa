import React from 'react'

function FilterButtons({setUrl}) {
  return (
    <button class="p-[0.5rem_1rem] border border-black" onClick={()=>{setUrl('http://localhost:5000/plave')}}>Plave</button>
  )
}

export default FilterButtons