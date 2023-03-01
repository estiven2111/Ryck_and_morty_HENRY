import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css"
import { NavLink, Link } from 'react-router-dom'
import swal from 'sweetalert'

export default function NavBar(props) {


   const handleOut = () => {

      swal({
         title: "cierre de seccion",
         text: "Esta seguro que desea abandonar la seccion",
         icon: "info",
         buttons: ["No", "Si"]
      }).then(respuesta => {
         if (respuesta) {
            swal({
               title: "Cuidate hasta pronto",
               text: "MUCHAS GRACIAS",
               icon: "success",
               button: "Aceptar"
            })
            props.logout();
         }
      });


   }
   return (
      <div className={styles.container}>
         <NavLink to="/About">
            <button className={styles.btn}>About</button>
         </NavLink>
         <NavLink to="/Home">
            <button className={styles.btn}>Home</button>
            {/* <button as={Link} to="/Home">home</button> */}
         </NavLink>
         <button onClick={handleOut} className={styles.btn}>Logout</button>
         <SearchBar
            onSearch={props.onSearch}
         />
      </div>
   );
}

