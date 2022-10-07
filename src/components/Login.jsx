import React, { useState } from 'react'
import { Dashboard } from './Dashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import fondo from './Scapi22.jpg'
import './Login.css';

export const Login = () => {


  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");


  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
      alert("¡Debe rellenar los campos de usuario y contraseña!");
    }else{
      if(usu === "scapi" && pas==="QBRLfuW3%e34"){
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      }else{
        setMiLogin("false");
        alert("Se ha producido un error, vuelva a intentarlo.");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  }


  return (
    <div className='main' style={{backgroundImage:`url(${fondo})`}} >

    <div  className="container" >

    <form id="form_login"     >
      <div>
        <h3  >Inicio de sesión</h3>
        <h3><FontAwesomeIcon icon={faLock}  /></h3>
    </div>
    <div>
        <label htmlFor="txtusu" ><strong>Usuario</strong></label>
        <input type="text" id="txtusu" autoFocus className="form-control"  onChange={ (e)=>setUsu(e.target.value) } placeholder="Introduzca un nombre de usuario" required/>
      </div>

      <div>
        <label htmlFor="txtpas" ><strong>Contraseña</strong></label>
        <input type="password" id="txtpas"  className="form-control"  onChange={ (e)=>setPas(e.target.value) } placeholder="Introduzca la contraseña" required/>

      </div>

        <input type="submit" id="IniSesion" className="btn btn-primary" value="INICIAR SESIÓN"  onClick={ iniciarSesion }/>
    </form>

  </div>
  { miLogin === "true" && <Dashboard /> } 
</div>


  )
}
