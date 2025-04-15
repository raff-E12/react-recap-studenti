import { useEffect, useState } from 'react'
import './App.css'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import FilterBar from './components/FilterBar'
import { Api_Response } from './utils/StatusGenerator'
import EditForm from './components/EditForm'

function App() {  
  const [isLocal, setLocal] = useState([]);

  async function Export_data(){
     try {
      const export_call = await Api_Response();
      setLocal(export_call);
     } catch (error) {
      console.log(error);
     }
  }

  useEffect(()=>{ Export_data() },[]);
  console.log(isLocal);

  return (
    <>
      <main className="container">
      <h1>Gestione Studenti</h1>
      <div id="status-message" className="status-message"></div>
       <StudentForm />
       <FilterBar />
       <StudentList list={isLocal} setslist={setLocal}/>
      </main>
    </>
  )
}

export default App
