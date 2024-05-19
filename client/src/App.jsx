import { useState, useEffect } from 'react';
import './output.css';
import ListItem from './components/ListItem';
const App = () => {
  const urlApi='http://localhost:5000/api';
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch(urlApi)
      .then( res => res.json())
      .then((data) => {
        setBackendData(data)
      })
  }, [])
  return (
    <>
    <h1 class="text-5xl text-center mt-[5vh] mb-32">Ribe Jadrana</h1>
    <div class="w-max grid grid-cols-4 border border-red-600 m-auto gap-2 mb-20">
      {(typeof backendData === 'undefined')?(<p>Loading...</p>):(
        backendData.map((riba, i)=>(
          <ListItem key={i} value={riba}/>
        ))
      )}
    </div>
    </>
  );
};
export default App;