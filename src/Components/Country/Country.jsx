import React from 'react'
import './Country.css'

function Country({ele}) {
  return (
    <div className='countryCard'>
        <div className='countryFlagCont'>
            <img src={ele.flags.png} alt="" />
        </div>

        <div className='countryNameCont'>
            <p style={{marginBottom:'5px'}}>Name: {ele.name.common}</p>
            <p>Capital: {typeof ele.capital === 'object' ? ele.capital[0] : ele.capital}</p>
        </div>
    </div>
  )
}

export default Country;