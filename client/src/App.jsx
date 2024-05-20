import { useState, useEffect } from 'react';
import './output.css';
import SveRibe from './components/SveRibe';
const App = () => {
  const urlApi='http://localhost:5000/api';
  const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
      fetch(urlApi)
        .then( res => res.json())
        .then((data) => {
          setBackendData(data);
        })
        
    }, [])


    
  return (
    <>
    <h1 class="text-5xl text-center mt-[5vh] mb-32">Ribe Jadrana</h1>
    <button onClick={()=>{}}>Novi ispis</button>
    <SveRibe backEndData={backendData}/>
    </>
  );
};
export default App;