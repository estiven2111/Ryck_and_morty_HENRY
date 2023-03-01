import { useState,useEffect } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/form/Form'
import { useLocation,useNavigate } from 'react-router-dom'

function App() {
  // estado local
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();

  //componente
  const [access, setAccess] = useState(false);
  const username = "ft35b@gmail.com";
  const password = "123456";

  function login(userData){
    if(userData.username === username && userData.password === password){

      setAccess(true);
      navigate("/Home");
    }
  }
  function logout(){
    setAccess(false)
    navigate("/")
  }


 //todo: lo que hace esto es estar observando constantemente que acces este en true si pasa a falso me redirigue 
 //todo inmediatamente al inicio de la pagina 
  useEffect(() => {
    !access && navigate('/');
 }, [access]);


  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);

        } else {
          window.alert("No hay personaje con ese ID");
        }
      })

  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }
  const location = useLocation();
  

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {location.pathname !== "/" && <NavBar onSearch={onSearch} logout={logout} />}

      </div>
      <hr />
      <Routes>

        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Cards characters={characters}
          onClose={onClose} />} />
        <Route path="/Detail/:detailId" element={<Detail />} />
        <Route exact path="/" element={<Form login={login}/>} />
      </Routes>

    </div>

  )

}

export default App


