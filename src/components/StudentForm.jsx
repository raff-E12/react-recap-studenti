import React, { useEffect, useState } from 'react'

export default function StudentForm({list, sets}) {
  const [isName, setParmName] = useState("");
  const [isCourse, setParmCourse] = useState("");
  const [isStatus, setParmStatus] = useState("");

  // Tracciamento dei valori forniti in input
  function handleValueParmsExport(e){
    const { name, value } = e.target;
    const string_value = String(value);
    const export_obj = { name: "", course: "" ,status: ""};
    console.log(string_value);
    switch (name) {
      case "name":
        setParmName(string_value);
        break;

      case "course":
        setParmCourse(string_value);
      break;

      case "status":
        setParmStatus(string_value);
        break;
    }

    export_obj.name = isName;
    export_obj.course = isCourse;
    export_obj.status = isStatus;

    console.log(export_obj);
    return export_obj
  }

// Aggiunta della parametri forniti nella lista API
  function handleNewStudentsAdd(e){
    e.preventDefault();
    if (isName !== "" && isCourse !== "" && isStatus !== "") {
      const obj_trasfer = handleValueParmsExport(e);
      const obj_student_composition = {id: list[list.length - 1].id + 1, ...obj_trasfer};
      console.log(obj_student_composition);
      const new_list = [...list, obj_student_composition];
      return sets(new_list);
    } else {
      window.alert("Completa i campi prima di proseguire.");
    }
  }

  return (
    <section className="form-section" onSubmit={handleNewStudentsAdd}>
    <h2>Aggiungi Studente</h2>
    <form id="student-form">
      <label>
        Nome:
        <input type="text" name="name" value={isName} required onChange={handleValueParmsExport}/>
      </label>
      <label>
        Corso:
        <input type="text" name="course" value={isCourse} required onChange={handleValueParmsExport}/>
      </label>
      <label>
        Stato:
        <select name="status" required value={isStatus} onChange={handleValueParmsExport}>
          <option value="attivo" selected >Attivo</option>
          <option value="inattivo">Inattivo</option>
        </select>
      </label>
      <button type="submit">Aggiungi</button>
    </form>
  </section>
  )
}
