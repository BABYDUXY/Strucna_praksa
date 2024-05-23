import { useState, useEffect } from 'react';
import './output.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SpecificFish from './page/SpecificFish';
import MainPage from './page/MainPage';
const App = () => {
  const [url, setUrl]=useState('http://localhost:5000/');
  const [backendData, setBackendData] = useState([{}]);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
    },
    {
      path: "/fish/:id",
      element: <SpecificFish data={backendData}/>,
    },
  ]);


  

    useEffect(() => { 
      fetch(url)
        .then( res => res.json())
        .then((data) => {
          setBackendData(data);
          console.log(data);
        })
        
    }, [url])


    
  return (
    <><RouterProvider router={router} />
    </>
  );
};
export default App;