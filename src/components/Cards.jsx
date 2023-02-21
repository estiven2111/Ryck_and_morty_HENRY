import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map(characters =>(
         
         <Card
            key={characters.id}
            onClose = {()=>alert("Emulamos que cierra")}
            name ={characters.name}
            species ={characters.species}
            gender ={characters.gender}
            image ={characters.image}
         />
      ))}
   </div>;
}
