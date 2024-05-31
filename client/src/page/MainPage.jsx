import { useState, useEffect } from 'react';
import SveRibe from '../components/SveRibe';
import FilterButtons from '../components/FilterButtons';

function MainPage({backendData, setUrl}) {

    
  return (
    <>
    <h1 className="mb-20 text-5xl text-center mt-14">Ribe Jadrana</h1>
    <FilterButtons setUrl={setUrl}/>
    <SveRibe backEndData={backendData}/>
    </>
  )
}

export default MainPage