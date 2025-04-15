import React, { useState } from 'react'
import StudentItems from './StudentItems'

export default function StudentList({list}) {
   const export_list = list;
  return (
    <section className="list-section">
        <div className="list-header">
          <h2>Elenco Studenti</h2>
          <div className="sort-controls">
            <label>Ordina per:</label>
            <select id="sort-by">
              <option value="name">Nome</option>
              <option value="course">Corso</option>
            </select>
          </div>
        </div>
         <ul id="student-list">
          <StudentItems exportList={export_list}/>
         </ul>
      </section>
  )
}
