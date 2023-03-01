import styles from "./Card.module.css";
import { Link } from 'react-router-dom'
export default function Card(props) {
   return (

      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={props.onClose}>X</button>
         </div>

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



