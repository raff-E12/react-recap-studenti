import React, { useEffect, useState } from 'react'
import { list_export } from '../utils/StatusGenerator';
import EditForm from './EditForm';

export default function StudentItems({exportList, setsList, FunClick}) {
  const export_list = exportList;
  const [isOpen, setOpen] = useState(null);

  // Renderizzazione dei valori forniti dall'api in pagina
  return (
     <>
      {export_list.map((element, index) =>{
        const ID_selected = element.id;
        return(
          <li key={index} className={`${element.status === "attivo" ? "" : "inactive"}`} id={`list-${element.id}`}>
            <div>
              <strong>{element.name}</strong> {element.course}
                <span className="status">({element.status})</span>
              </div>
            <div className="actions">
              <button className="edit-btn" onClick={() => {setOpen( prev => element.id ===  prev ? null : element.id)}}>Modifica</button>
              <button className="delete-btn" onClick={()=>{FunClick(index)}}>Elimina</button>
            </div>
           <EditForm ID={ID_selected} idOp={isOpen === element.id} list={export_list} sets={setsList} />
          </li>
        )
      })}
     </>
  )
}