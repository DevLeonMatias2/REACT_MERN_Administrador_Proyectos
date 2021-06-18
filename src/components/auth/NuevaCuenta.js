import React,{ useState} from 'react';
import {Link} from "react-router-dom";

const NuevaCuenta = ()=>{

  //State para iniciar sesion
  const [usuario,guardarUsario] = useState({
    nombre:'',
    email:'',
    password:'',
    confirmar:''

  });

  //extraer de usuario
  const { nombre,email, password,confirmar} = usuario;

  const onChange = e =>{
    guardarUsario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  };

  // Cuando el usuario quiere iniciar sesion

  const onSubmit = e =>{
    e.preventDefault();

    // Validar que no hay campos vacios


    // Pasword minimo de 6 caracteres

    // Los 2 posswords son iguales

    //pasarlo la action

  };

  return(
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Obtener una Cuenta</h1>

          <form onSubmit={onsubmit}>

            <div className="campo-form">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" placeholder="Tu Nombre" value={nombre} onChange={onChange}/>
            </div>

            <div className="campo-form">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Tu Email" value={email} onChange={onChange}/>
            </div>

            <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Tu Password" value={password} onChange={onChange}/>
          </div>

            <div className="campo-form">
              <label htmlFor="confirmar">Confirmar Password</label>
              <input type="password" id="confirmar" name="confirmar" placeholder="Tu Password" value={confirmar} onChange={onChange}/>
            </div>

            <div className="campo-form">
              <input type="submit" className="btn btn-primario btn-block" value="Registrarme"/>
            </div>

          </form>
          <Link to={'/'} className="enlace-cuenta">
            Volver a Iniciar Sesion
          </Link>

        </div>

      </div>
  )
};

export default NuevaCuenta;
