
// Interazione delle Api e integrazione delle risorse.

import axios from "axios";
import Listlocal from "./data.json"
import CourseList from "../data/course"

const list_export = Listlocal;
const list_extra = CourseList;
const url_api = "https://jsonplaceholder.typicode.com/users";
const list_course = ["Matematica", "Fisica", "Storia", "Informatica", "Letteratura", "Biologia", "Economia", "Arte"];
const list_status = ["attivo", "inattivo"];
let obj_test = [];

async function Api_Response(){
    try {
      const response_api = await axios.get(url_api);
      obj_test = response_api.data.map((element, index) => {return({id: element.id, name: element.name, 
      course: list_extra[index].course, status: list_extra[index].status})});
      return obj_test

    } catch (error) {

        console.log(error);
        throw new Error(error);
    }
}


export { Api_Response, list_export }