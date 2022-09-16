import React, {Suspense, useState} from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaPeliculas from './Components/ListaPeliculas';
import Detalles from './Components/Detalles';

function App() {


  
  return (
    <div className="App bg-gradient-to-tr from-gray-400 via-gray-600 to-blue-800 flex flex-col h-screen">
      
    <Header/>
    <ListaPeliculas/>
    <Detalles/>

    </div>
  );
}


export default App;
