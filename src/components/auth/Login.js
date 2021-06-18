import React,{ useState} from 'react';
import {Link} from "react-router-dom";

const Login = ()=>{

    //State para iniciar sesion
    const [usuario,guardarUsario] = useState({
        email:'',
        password:''
    });

    //extraer de usuario
    const { email, password } = usuario;

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
        // if (email===''|| password===''{
        //
        // })

        //pasarlo la action

    };

 return(
     <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
          <h1>Iniciar Sesion</h1>

          <form onSubmit={onsubmit}>
              <div className="campo-form">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Tu Email" value={email} onChange={onChange}/>
              </div>

              <div className="campo-form">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" placeholder="Tu Password" value={password} onChange={onChange}/>
              </div>

              <div className="campo-form">
                  <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion"/>
              </div>

          </form>
          <Link to={'/nueva-cuenta'} className="enlace-cuenta">
              Obtener Cuenta
          </Link>

      </div>

     </div>
 )
};

export default Login;
