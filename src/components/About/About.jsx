import React from "react";
import styles from './About.module.css';

export default function About(props) {
    return (
        <div className={styles.container}>
            <h1>QUIEN SOY YO</h1>
            <div>
            <img src={require("../img/estiven.jpg")} alt="" />

            <p> mi nombre es estiven Arboleda Reuncie a mi trabajo por cumplir mi sueño de porder ser un buen programador 
                y asi poder trabajar en este mundo tan maravilloso soy una persona que le gusta crear cosas y la programacion 
                es para esto crear he creado app de celular, paginas web, app de escritorio con varios lenguajes y aun considero
                que no se nada aun quiero aprender de buena forma como se programan las paginas web y convertirme en un excelente 
                desarrollar
            </p>
            <h2> Acerca de la aplicacion </h2>
            <p> Esta aplicacion consiste en traer datos de una Api y ir llenado el contenedor con la informacion que esta nos regala
                aprender a navegar entre diferentes url y como llamarlas entre ellas esta el Home el about y detail en el cual 
                aprendemos como pasar por medio de la url un id para mostrar los detalles de la tarjeta seleccionada 
            </p>
            </div>
        </div>
    );
}