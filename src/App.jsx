import { useEffect, useState } from 'react'
import './App.css'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import FilterBar from './components/FilterBar'
import { Api_Response, list_export } from './utils/StatusGenerator'
import EditForm from './components/EditForm'

function App() {  
  const [isLocal, setLocal] = useState([]);
  const [filName, setFiltername] = useState("");
  const [filCourse, setFiltercourse] = useState("");
  const [isResult, setResult] = useState(false);

  // Esportazione Api
  async function Export_data(){
     try {
      const export_call = await Api_Response();
      setLocal(export_call);
     } catch (error) {
      console.log(error);
     }
  }

  // Funzione di test - Unione in futuro tra i due parametri di verifica.
  function handleParmsFiltersname() {
    if (filName !== "") {
      setFiltercourse("");
      const filter_name = isLocal.filter(element => element.name.includes(filName));
      const json_comparasion = JSON.stringify(isLocal) === JSON.stringify(filter_name);
      let condition_list_fill = filter_name.length !== 0 && isLocal.length !== 0 && !json_comparasion ? filter_name : isLocal;
      setResult(() => {return filter_name.length !== 0 ? false : true});
      return setLocal(() => { return condition_list_fill});
    }
  }

  // Funzione di test - Unione in futuro tra i due  parametri di verifica.
  function handleParmsFilterscourse() {
    if (filCourse !== "") {
      setFiltername("");
      const filter_course = isLocal.filter(element => element.course.includes(filCourse));
      const json_comparasion = JSON.stringify(isLocal) === JSON.stringify(filter_course);
      let condition_list_fill = filter_course.length !== 0 && isLocal.length !== 0 && !json_comparasion ? filter_course : isLocal;
      setResult(() => {return filter_course.length !== 0 ? false : true});
      return setLocal(() => { return condition_list_fill});
    }
  }

  // Implementazione di eliminazione degli studenti al click del bottone.
  function handleRemoveStudentsClick(listIndex) {
    const filter_remove = isLocal.filter((_, index) => index !== listIndex);
    setResult(() => {return filter_remove.length !== 0 ? false : true})
    setLocal(filter_remove);
  }

  // UseEffect sul campo di variabile nominate.
  useEffect(()=>{ Export_data() },[filName, filCourse, isResult]);
  useEffect(()=>{ handleParmsFiltersname(); handleParmsFilterscourse() }, [isLocal]);

  return (
    <>
      <main className="container">
      <h1>Gestione Studenti</h1>
      <div id="status-message" className="status-message"></div>
       <StudentForm list={isLocal} sets={setLocal}/>
       <FilterBar nameFill={setFiltername} courseFill={setFiltercourse} valueName={filName} valueCourse={filCourse}/>
       {isResult ? <div className='container overflow-box'><h4>404 - Lista Vuota.</h4></div> : <StudentList list={isLocal} setslist={setLocal} removeClick={handleRemoveStudentsClick}/>}
      </main>
    </>
  )
}

export default App
