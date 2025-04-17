import React, { useEffect, useState } from 'react'
import StudentItems from './StudentItems'
import { list_export } from '../utils/StatusGenerator';

export default function StudentList({list, setslist, removeClick}) {
    const exportList = list;
    // console.log(exportList);

  // Filtraggio e ordinamento dei valori forniti in lista in base alla valutazione in stringa.
   function handleTargetValueinput(e) {
     const { id, value } = e.target;
     const value_string = String(value);
     if (value_string === "name") {
        // console.log("Basato sul name");
        const names_fil = [...exportList].sort((a, b) => a.name.localeCompare(b.name)); // Confronto fra stringhe facendo riferimento alla lingua locale.(localeCompare =>  Intl.Collator(Api)) 
        setslist(names_fil)
     } else if(value_string === "course"){
      // console.log("Basato sul corso");
      const course_fil = [...exportList].sort((a, b) => a.course.localeCompare(b.course));
      setslist(course_fil)
     }
   }

  return (
    <section className="list-section">
        <div className="list-header">
          <h2>Elenco Studenti</h2>
          <div className="sort-controls">
            <label>Ordina per:</label>
            <select id="sort-by" onChange={handleTargetValueinput}>
              <option value="name">Nome</option>
              <option value="course">Corso</option>
            </select>
          </div>
        </div>
         <ul id="student-list">
          <StudentItems exportList={exportList} setsList={setslist} FunClick={removeClick}/>
         </ul>
      </section>
  )
}
