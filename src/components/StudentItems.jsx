import React, { useEffect, useState } from 'react'
import { list_export } from '../utils/StatusGenerator';
import EditForm from './EditForm';

export default function StudentItems({exportList, setsList}) {
  const export_list = exportList;
  const [isID, setOpen] = useState(null);
  const [isName, setName] = useState("");
  const [isCourse, setCourse] = useState("");
  const [isActive, setActive] = useState("");

  return (
     <>
      {export_list.map(element =>{
        const ID_Card = isID === element.id;
        return(
          <li key={element.id} className={`${element.status === "attivo" ? "" : "inactive"}`}>
            <div>
              <strong>{ID_Card ? isName : element.name}</strong> {ID_Card ? isCourse : element.course}
                <span className="status">({ID_Card ? isActive : element.status})</span>
              </div>
            <div className="actions">
              <button className="edit-btn" onClick={() => {
                 if (isID === element.id) { 
                  setOpen(null)
                } else{
                 setOpen(element.id);
                 setCourse(element.course);
                 setName(element.name);
                 setActive(element.status);
               }
            }}>Modifica</button>
              <button className="delete-btn">Elimina</button>
            </div>
            <EditForm valueName={isName} valueCourse={isCourse} id={isID} setName={setName} setCourse={setCourse} isActive={isActive} setActive={setActive} />
          </li>
        )
      })}
     </>
  )
}