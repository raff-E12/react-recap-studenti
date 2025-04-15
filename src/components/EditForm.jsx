import React, { useEffect, useState } from 'react'
import { list_export } from '../utils/StatusGenerator';

export default function EditForm({valueName, valueCourse, setName, id, setCourse, setActive, isActive}) {
  const [Name, paramName] = useState("");
  const [Course, paramCourse] = useState("");
  const [Status, paramStatus] = useState("");

  function handleFunParmsEditAdd(e) {
     const {name, value} = e.target;
     console.log(name ,value);
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
    const { name } = e.target;
    if (id) {
      setName(Name);
      setActive(Status);
      setCourse(Course);
    }
  }

  return (
    <form className={`edit-form ${id ? "" : "unshow"}`} onSubmit={handleClickResult}>
    <label>
      Nome:
      <input type="text" name="name" value={Name} placeholder={valueName} onChange={handleFunParmsEditAdd}/>
    </label>
    <label>
      Corso:
      <input type="text" name="course" value={Course} placeholder={valueCourse} onChange={handleFunParmsEditAdd}/>
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
