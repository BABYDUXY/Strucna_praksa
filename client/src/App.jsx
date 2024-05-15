import { useState, useEffect } from 'react';
const App = () => {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then( res => res.json())
      .then((data) => {
        setBackendData(data)
        console.log(data)
      })
  }, [])
  return (
    <div>
      {(typeof backendData === 'undefined')?(<p>Loading...</p>):(
        backendData.map((riba)=>(
          <p>{riba.ime}</p>
        ))
      )}
      </div>
  );
};
export default App;