//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'

function App() {


  const [usu] = useState("");
  const [pas] = useState("");

  if(!usu & !pas) {
    return <Login />
  }

  return (
    <div className="App" >



      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
        </Routes>
        <Routes>
          <Route exact path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
