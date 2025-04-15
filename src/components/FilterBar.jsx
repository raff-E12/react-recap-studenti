import React, { useEffect, useState } from 'react'

export default function FilterBar({list, sets}) {
  const [filName, setFiltername] = useState("");
  const [filCourse, setFiltercourse] = useState("");

  function handleParmsAddFilters(e){
    
    const { id, value } = e.target;
    let filter_add_name = "";
    let filter_add_course = "";
    console.log(id, value);
    const value_string = String(value);

    if (id === "filter-name") {
      setFiltername(value_string);
      filter_add_name = list.filter( value => value.name.includes(filName));
      sets(filter_add_name);
    } else if(id === "filter-course"){
      setFiltercourse(value_string);
      filter_add_course = list.filter( value => value.name.includes(filName));
      sets(filter_add_course);
    }
  }

  return (
    <section className="filter-section">
    <h2>Filtra</h2>
    <input type="text" id="filter-name" value={filName} placeholder="Filtra per nome" onChange={handleParmsAddFilters}/>
    <input type="text" id="filter-course" value={filCourse} placeholder="Filtra per corso"  onChange={handleParmsAddFilters}/>
  </section>
  )
}
