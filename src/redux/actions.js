import { ADD_PERSON, DELETE_PERSON } from "./types";

export function addPerson(id){
    return{
        type:ADD_PERSON,
        payload:id
    }
}

export function deletePerson(id){
    return{
        type:DELETE_PERSON,
        payload:id
    }
}