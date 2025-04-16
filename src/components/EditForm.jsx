import React, { useEffect, useState } from 'react'
import { list_export, Api_Response } from '../utils/StatusGenerator';

export default function EditForm({idOp, ID, list, sets}) {
  const [Name, paramName] = useState("");
  const [Course, paramCourse] = useState("");
  const [Status, paramStatus] = useState("");

  function handleFunParmsEditAdd(e) {
     const {name, value} = e.target;
    //  console.log(name ,value);
     const StringValue = String(value);

     switch (name) {
      case "name":
        paramName(StringValue);
        break;
      
      case "course":
        paramCourse(StringValue);
        break;
      
      case "status":
        paramStatus(StringValue);
     }
  }

  function handleClickResult(e) {
    e.preventDefault();
    const obj_add = {
       name: Name,
       course: Course,
       status: Status
    }
    // console.log(obj_add);
    if (obj_add.name !== "" && obj_add.course !== "" && obj_add.status !== "") {
        const list_find = list.find(element => element.id === ID).id;
        console.log(list_find)
        const add_list =  {id: list_find, ...obj_add};
        console.log(list);
        window.alert("La Richiesta di Campo è stata completata");
        return list[list_find - 1] = add_list;
    } else{
      return window.alert("Completa i campi prima di inviare");
    }
  }

  return (
    <form className={`edit-form ${idOp ? "" : "unshow"}`} onSubmit={handleClickResult}>
    <label>
      Nome:
      <input type="text" name="name" value={Name} placeholder="Inserisci..." onChange={handleFunParmsEditAdd}/>
    </label>
    <label>
      Corso:
      <input type="text" name="course" value={Course} placeholder="Inserisci..." onChange={handleFunParmsEditAdd}/>
    </label>
    <label>
      Stato:
      <select name="status" value={Status} onChange={handleFunParmsEditAdd}>
        <option value="attivo">Attivo</option>
        <option value="inattivo">Inattivo</option>
      </select>
    </label>
    <button type="submit">Salva modifiche</button>
    </form>
  )
}
