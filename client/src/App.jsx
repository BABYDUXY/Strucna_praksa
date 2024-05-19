import { useState, useEffect } from 'react';
import './App.css';
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
    
    <table>
      {(typeof backendData === 'undefined')?(<p>Loading...</p>):(
        backendData.map((riba, i)=>(
          <ListItem key={i} value={riba}/>
        ))
      )}
    </table>
  );
};
export default App;