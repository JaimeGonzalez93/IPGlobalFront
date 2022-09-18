import './App.css';
import Header from './Paginas/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaPeliculas from './Paginas/ListaPeliculas';
import Detalles from './Paginas/Detalles';


function App() {


  
  return (
    <div className="App bg-gradient-to-tr from-gray-400 via-gray-600 to-blue-800 flex flex-col ">
      <Router>
        <Header/>
        <Routes>
            <Route path= "/"  element = {<ListaPeliculas/>}/>
            <Route path="/pelicula/:id" element = {<Detalles/>}/>
        </Routes>
      </Router>  
    </div>
  );
}


export default App;
