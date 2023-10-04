
import {Route, Routes} from 'react-router-dom';
import About from './Components/About.jsx'
import Navbar from './Components/Navbar.jsx'
import Main from './Components/main.jsx'
import './App.css'
import Astros from './Components/Astros.jsx'
import AppBar  from './Components/AppBar.jsx'





function App() {
//aqui se declara: links en forma de objeto
const linksData = [
      {name:'Home', href:'/'},
      {name: 'About', href:'/about'},
      {name: 'Astros', href:'/astros'},
]
  return (
    <>

    <Navbar header='Navbar' links={linksData}/> 
    <Routes>
      <Route
      element={<Main/>}
      path='/'
    />
    <Route
      element={<Astros/>}
      path='/astros'
    />
    <Route
          element={<About/>}  
          path='/about'
        />
    </Routes>

    </>
  )
}

export default App
