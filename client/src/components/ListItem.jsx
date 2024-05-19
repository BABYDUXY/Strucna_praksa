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

    console.log(value)
    return (
    <tr>
       <td>{value.ime}</td>
       <td>{value.ostali_nazivi}</td>
       <td>{value.lat_ime}</td>
       <td>{value.vrsta}</td>
       <td>{value.min_dubina}</td>
       <td>{value.max_dubina}</td>
       <td>{value.max_duljina}</td>
       <td>{value.max_tezina}</td>
       <td>{value.otrovna}</td>

    </tr>
  )
}

export default ListItem