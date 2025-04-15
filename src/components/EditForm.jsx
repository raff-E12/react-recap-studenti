import React, { useEffect, useState } from 'react'

export default function EditForm({valueName, valueCourse, valueStatus, click}) {
  const [isName, setName] = useState("");
  const [isCourse, setCourse] = useState("");
  const [isActive, setActive] = useState("");

  useEffect(()=>{
    setName(valueName);
    setCourse(valueCourse);
    setActive(valueStatus);
   },[isName, isCourse, isActive]);

  return (
    <form className={`edit-form ${click ? "" : "unshow"}`}>
    <label>
      Nome:
      <input type="text" name="name" value="" placeholder={isName} />
    </label>
    <label>
      Corso:
      <input type="text" name="course" value="" placeholder={isCourse}/>
    </label>
    <label>
      Stato:
      <select name="status" defaultValue={isActive !== "attivo" ? "active" : "inactive"} >
        <option value="active">Attivo</option>
        <option value="inactive">Inattivo</option>
      </select>
    </label>
    <button type="submit">Salva modifiche</button>
    </form>
  )
}
