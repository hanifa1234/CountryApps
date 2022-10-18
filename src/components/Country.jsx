import React from 'react'

import style from './country.module.css'




const Country = (props) => {

  
const handelRemoveCountry = (name) => {
  props.onRemoveCountry(name)
}

  const { name, flags, capital, population, area, region} = props.country;

  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt={name.common} className={style.flag} />
        <h3> Name: {name.common} </h3>
        <h3> Population: {population} </h3>
        <h3> Capital: {capital} </h3>
        <h3> Area: {area} </h3>
        <h3> Region: {region} </h3>

        <button className={style.btn} onClick={()=>{
          handelRemoveCountry(name.common)
        }}>
         remove country
         </button>

      </div>


    </article> 
  )
}

export default Country;