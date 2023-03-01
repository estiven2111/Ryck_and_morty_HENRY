import styles from "./SearchBar.module.css"
import { useState } from 'react'
export default function SearchBar(props) {

   const [character, setCharater] = useState("");

   const handleChangue = e => {
      const { value } = e.target;
      setCharater([value]);
   }
   return (

      <div className={styles.container}>
        
         {/* <img src={require('../img/barcode.jpg')} /> */}


         <input type='search'
            name={props.name}
            id={props.id}
            onChange={handleChangue}

         />
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
