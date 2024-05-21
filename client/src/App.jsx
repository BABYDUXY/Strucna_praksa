import { useState, useEffect } from 'react';
import './output.css';
import SveRibe from './components/SveRibe';
import FilterButtons from './components/FilterButtons';
const App = () => {
  const [url, setUrl]=useState('http://localhost:5000/api');
  const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
      fetch(url)
        .then( res => res.json())
        .then((data) => {
          setBackendData(data);
        })
        
    }, [url])


    
  return (
    <>
    <h1 class="text-5xl text-center mt-[5vh] mb-32">Ribe Jadrana</h1>
    <FilterButtons setUrl={setUrl}/>
    <SveRibe backEndData={backendData}/>
    </>
  );
};
export default App;