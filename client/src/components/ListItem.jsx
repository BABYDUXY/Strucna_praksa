import React from 'react'
import { Link } from 'react-router-dom'

function ListItem({value}) {
    let atributes=[
        'ime',
        'ostali_nazivi',
        'lat_ime',
        'vrsta',
        'min_dubina',
        'max_dubina',
        'max_duljina',
        'max_tezina',
        'otrovna'
    ]

    


    // <td>{value.ostali_nazivi}</td>
    // <td>{value.lat_ime}</td>
    // <td>{value.vrsta}</td>
    // <td>{value.min_dubina}</td>
    // <td>{value.max_dubina}</td>
    // <td>{value.max_duljina}</td>
    // <td>{value.max_tezina}</td>
    // <td>{value.otrovna}</td>
    return (
    <Link to={`/fish/${value.ID}`} class="animate-spawn opacity-0 w-[20rem] h-32 bg-green-600 justify-self-center flex  items-end justify-center rounded-lg hover:cursor-pointer hover:scale-y-125 group transition-all ease-in-out duration-300 hover:border overflow-hidden relative flex-col">
      <img src={value.slika} class=" group-hover:scale-y-[0.8] self-center justify-self-center w-full transition-all duration-300 ease-in-out" alt="" />
       <h2 class="absolute  bottom-0 right-5 group-hover:scale-y-[0.8] transition-all duration-300 ease-in-out group-hover:bottom-5 group-hover:font-bold bg-black text-white p-1 rounded-md">{value.ime} id: {value.ID}</h2>
       
    </Link>
  )
}

export default ListItem