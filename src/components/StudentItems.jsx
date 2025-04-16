import React, { useEffect, useState } from 'react'
import { list_export } from '../utils/StatusGenerator';
import EditForm from './EditForm';

export default function StudentItems({exportList, setsList}) {
  let export_list = exportList;
  const [isOpen, setOpen] = useState(null);

  return (
     <>
      {export_list.map(element =>{
        return(
          <li key={element.id} className={`${element.status === "attivo" ? "" : "inactive"}`}>
            <div>
              <strong>{element.name}</strong> {element.course}
                <span className="status">({element.status})</span>
              </div>
            <div className="actions">
              <button className="edit-btn" onClick={() => {setOpen( value => element.id === value ? null : element.id)}}>Modifica</button>
              <button className="delete-btn">Elimina</button>
            </div>
           <EditForm ID={element.id} idOp={isOpen === element.id} list={export_list} sets={setsList}/>
          </li>
        )
      })}
     </>
  )
}