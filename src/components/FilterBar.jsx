import React, { useEffect, useState } from 'react'

export default function FilterBar({nameFill, courseFill, valueName, valueCourse}) {

  // Tracciamento dei parametri per il filtraggio in lista.
  function handleParmsAddFilters(e){
    const { id, value } = e.target;
    // console.log(id, value);
    const value_string = String(value);
    if (id === "filter-name") {
      nameFill(value_string);
    } else if(id === "filter-course"){
      courseFill(value_string);
    }
  }

  return (
    <section className="filter-section">
    <h2>Filtra</h2>
    <input type="text" id="filter-name" value={valueName} placeholder="Filtra per nome" onChange={handleParmsAddFilters}/>
    <input type="text" id="filter-course" value={valueCourse} placeholder="Filtra per corso"  onChange={handleParmsAddFilters}/>
  </section>
  )
}
