import React, { useState } from 'react'
import { list_export } from '../utils/StatusGenerator';
import EditForm from './EditForm';

export default function StudentItems({exportList}) {
  const export_list = exportList;
  const [isOpen, setOpen] = useState(null);
  return (
     <>
      {export_list.map( element =>{
        return(
          <li key={element.id} className={`${element.status === "attivo" ? "" : "inactive"}`}>
            <div>
              <strong>{element.name}</strong> {element.course}
                <span className="status">({element.status})</span>
              </div>
            <div className="actions">
              <button className="edit-btn" onClick={() => {setOpen(prev => element.id === prev ? null : element.id)}}>Modifica</button>
              <button className="delete-btn">Elimina</button>
            </div>
            <EditForm valueName={element.name} valueCourse={element.course} valueStatus={element.status} click={isOpen === element.id}/>
          </li>
        )
      })}
     </>
  )
}

/*   <li>
       <div>
        <strong>Giulia</strong> - Matematica
          <span className="status">(attivo)</span>
        </div>
          <div className="actions">
            <button className="edit-btn">Modifica</button>
            <button className="delete-btn">Elimina</button>
          </div>
          <StudentForm />
         </li> */
