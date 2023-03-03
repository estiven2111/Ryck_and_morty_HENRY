import styles from "./Card.module.css";
import { Link } from 'react-router-dom'
import { addPerson, deletePerson } from "../../redux/actions";
import {connect} from "react-redux"
import { useState,useEffect } from "react";
import React from "react";

export function Card(props) {
    const  [ isFav,setIsfav] = useState(false);

    useEffect(() => {
      this.props.addPerson.forEach((fav) => {
         if (fav.id === props.id) {
            setIsfav(true);
         }
      });
   }, [this.props.addPerson]);

   // useEffect(()=>{
   //    console.log(props.deletePerson)
   // },[])
   

    function handleFavorite(){
if (isFav) {
   setIsfav(false);
   // props.deletePerson(props.id);
}else{
   setIsfav(true);
   // console.log(props.addPerson)
   // 
}
    }
  
  
   return (

      <div className={styles.container}>
         
         <div className={styles.buttonContainer}>
            <button onClick={props.onClose}>X</button>
         </div>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <div className={styles.dataContainer}>
            <h2>{props.name}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         < Link to={`/Detail/${props.id}`}>
            <img className={styles.image} src={props.image} alt="" />
         </Link>
      </div>
   );
}

 function  mapDispatchToProps(dispatch){
   return{
      addperson: (id)=>{
         console.log("add",id)
         dispatch(addPerson(id))
      },
      deleteperson:(id)=>{
         console.log("delete",id)
         dispatch(deletePerson(id))
      }
   }
}

 function mapStateToProps(state){
   // console.log(state)
   
   return{
       addPerson: state.addPerson
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)



