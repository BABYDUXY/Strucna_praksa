import React from 'react'
import { useParams } from 'react-router-dom'

function SpecificFish({data}) {

  const params = useParams();

  return (
    <>
    {data.map((riba)=>( 
      (riba.ID == params.id)?(
      
      <h1>{riba.ime}</h1>

    ):""
  ))};
    
    </>
  )
}

export default SpecificFish