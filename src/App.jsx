import { useEffect, useState } from 'react'
import './App.css'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import FilterBar from './components/FilterBar'
import { Api_Response, list_export } from './utils/StatusGenerator'
import EditForm from './components/EditForm'

/**
 * Approfondimento su Sets():
 * @argument new_Sets - il sets permette di memorizzare dei determinati valori unici nel suo insieme
 *  eliminando i dupplicati che tendo a contrastare la dupplicazione e dare efficienza nel controllo dei valori in un array ad esempio.
 * 
 * @method has() - serve a trovare le differenze negli array o oggetti con proprietà diverse, esistenti o uguali durante la sua verifica.
 */

function App() {  
  const [isLocal, setLocal] = useState([]);
  const [filName, setFiltername] = useState("");
  const [filCourse, setFiltercourse] = useState("");
  const [isResult, setResult] = useState(false);
  const [isTrue, setTrue] = useState(false);

  // Esportazione Api
  async function Export_data(){
     try {
      const export_call = await Api_Response();
      setLocal(export_call);
     } catch (error) {
      console.log(error);
     }
  }

  // Funzione di unione dei risultati in maniera definitiva.
  function handleParmsFilters() {
    let filter_course = [];
    let filter_name = [];

    if (filName !== "") {
      filter_name = isLocal.filter(element => element.name.includes(filName));
      setResult(() => {return filter_name.length !== 0 || filName === "" ? false : true});
      // console.log(filter_name.find( element => element.name !== filName) ? true : false)
      setTrue(() => { return filter_name.find(element => element.name !== filName) ? true : false})
      // console.log(filter_name);
    } else{
      setTrue(value => !value);
    }

    if (filCourse !== "") {
      filter_course = isLocal.filter(element => element.course.includes(filCourse));
      setResult(() => {return filter_course.length !== 0 || filCourse === "" ? false : true});
      // console.log(filter_course);
      setTrue(() => { return filter_course.find(element => element.course === filCourse) ? false : true})
    } else{
      setTrue(value => value);
    }

    const filter_combinated = [...new Set([...filter_name, ...filter_course])]; // Tende ad evitare dupplicati in caso di ricerca dello stesso elemento.
    // console.log(filter_combinated);
    const json_comparasion = JSON.stringify(isLocal) === JSON.stringify(filter_combinated);
    let condition_list_fill = filter_combinated.length !== 0 && isLocal.length !== 0 && !json_comparasion ? filter_combinated : isLocal;
    return setLocal(() => { return condition_list_fill});

  }

  // // Funzione di test - Unione in futuro tra i due  parametri di verifica.
  // function handleParmsFilterscourse() {
  //   if (filCourse !== "") {
  //     setFiltername("");
  //     const filter_course = isLocal.filter(element => element.course.includes(filCourse));
  //     const json_comparasion = JSON.stringify(isLocal) === JSON.stringify(filter_course);
  //     let condition_list_fill = filter_course.length !== 0 && isLocal.length !== 0 && !json_comparasion ? filter_course : isLocal;
  //     setResult(() => {return filter_course.length !== 0 ? false : true});
  //     return setLocal(() => { return condition_list_fill});
  //   }
  // }

  // Implementazione di eliminazione degli studenti al click del bottone.
  function handleRemoveStudentsClick(listIndex) {
    const filter_remove = isLocal.filter((_, index) => index !== listIndex);
    setResult(() => {return filter_remove.length !== 0 ? false : true})
    setLocal(filter_remove);
  }

  // UseEffect sul campo di variabile nominate.
  useEffect(()=>{ Export_data() },[filName, filCourse ]);
  useEffect(()=>{ handleParmsFilters() }, [isLocal]);

  return (
    <>
      <main className="container">
      <h1>Gestione Studenti</h1>
      <div id="status-message" className={`status-message ${isResult ? "error" : ""} ${isTrue ? "success" : ""}`}>{isResult ? "Riprova." : "Ottimo, operazione riuscita."}</div>
       <StudentForm list={isLocal} sets={setLocal}/>
       <FilterBar nameFill={setFiltername} courseFill={setFiltercourse} valueName={filName} valueCourse={filCourse}/>
       <StudentList list={isLocal} setslist={setLocal} removeClick={handleRemoveStudentsClick}/>
      </main>
    </>
  )
}

export default App
