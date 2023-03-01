import React from "react";
//import styles from './Detail.module.css';
import {useParams,Link} from 'react-router-dom';
import {useState,useEffect} from 'react';





export default function Detail(props) {
    const {detailId} = useParams()
    //estado local de react
    const [character,setCharacter] = useState({});

    useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
}, [detailId]);
    return (
        <div>
            <Link to="/" >
<button>Ir a Inicio</button>
            </Link>
            <h1>detail</h1>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            {/* para validar si la propiedad si llega */}
           {character.origin && <h2>{character.gender}</h2>}
            <img src={character.image} alt={character.name} />
        </div>
    );
}