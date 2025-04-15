
// Interazione delle Api e integrazione delle risorse.

import axios from "axios";
import Listlocal from "./data.json"

const list_export = Listlocal;
const url_api = "https://jsonplaceholder.typicode.com/users";
const list_course = ["Matematica", "Fisica", "Storia", "Informatica", "Letteratura", "Biologia", "Economia", "Arte"];
const list_status = ["attivo", "inattivo"];

async function Api_Response(){
    try {
        const response_api = await axios.get(url_api);
        const obj_test = response_api.data.map( element => {
          return({
            id: element.id,
            name: element.name,
            course: list_course[Math.floor(Math.floor(Math.random() * list_course.length))],
            status: list_status[Math.floor(Math.random() * list_status.length)]
        })
      })
        return obj_test
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export { Api_Response, list_export }