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

  async function Export_data(){
     try {
      const export_call = await Api_Response();
      setLocal(export_call);
     } catch (error) {
      console.log(error);
     }
  }

  function handleParmsFilters() {
    if (filName !== "") {
      console.log(filName)
      const filter_name = isLocal.filter(element => element.name === filName);
      console.log(filter_name);
      return setLocal( list => {filter_name.length !== 0 && filter_name !== undefined ? filter_name : list});
    }
  }

  useEffect(()=>{ Export_data() },[filName, filCourse]);
  useEffect(()=>{ handleParmsFilters() }, [isLocal]);
  return (
    <>
      <main className="container">
      <h1>Gestione Studenti</h1>
      <div id="status-message" className="status-message"></div>
       <StudentForm />
       <FilterBar nameFill={setFiltername} courseFill={setFiltercourse} valueName={filName} valueCourse={filCourse}/>
       <StudentList list={isLocal} setslist={setLocal}/>
      </main>
    </>
  )
}

export default App
