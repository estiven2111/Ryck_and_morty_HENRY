export default function SearchBar(props) {
   return (
      <div>
         <input type='search' 
          name={props.name}
          id={props.id}
         />
      <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
