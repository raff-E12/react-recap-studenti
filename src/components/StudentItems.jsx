import React, { useEffect, useState } from 'react'
import { list_export } from '../utils/StatusGenerator';
import EditForm from './EditForm';

export default function StudentItems({exportList, setsList}) {
  const export_list = exportList;
  const [exportParms, setExport] = useState({});
  const [isID, setOpen] = useState(null);
  const [isName, setName] = useState("");
  const [isCourse, setCourse] = useState("");
  const [isActive, setActive] = useState("");

  return (
     <>
      {export_list.map(element =>{
        const ID_Card = isID === element.id;
        const edited = editedItems[element.id];
        return(
          <li key={element.id} className={`${element.status === "attivo" ? "" : "inactive"}`}>
            <div>
              <strong>{ edited?.name || element.name}</strong> { edited?.course || element.course}
                <span className="status">({edited?.course || element.status})</span>
              </div>
            <div className="actions">
              <button className="edit-btn" onClick={() => {
                 if (isID === element.id) { 
                  setOpen(null)
                } else{
                 setOpen(element.id);
                 setName(element.name);
                 setCourse(element.course);
                 setActive(element.status);
               }
            }}>Modifica</button>
              <button className="delete-btn">Elimina</button>
            </div>
            {ID_Card && (<EditForm valueName={isName} valueCourse={isCourse} idOp={true} ID ={element.id} setName={setName} setCourse={setCourse} setActive={setActive} storage={(id, data)=>{setExport( prev => ({ ...prev, [id]: data}))}}/>)}
          </li>
        )
      })}
     </>
  )
}