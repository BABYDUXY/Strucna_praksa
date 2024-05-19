import React from 'react'
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

    console.log(value)
    return (
    <div class="w-[20rem] h-32 bg-green-600 justify-self-center flex  items-end justify-center rounded-lg hover:scale-y-125 group transition-all ease-in-out duration-300 hover:border">
       <h2 class="group-hover:scale-y-100 group-hover:font-bold">{value.ime} id: {value.ID}</h2>
       
    </div>
  )
}

export default ListItem