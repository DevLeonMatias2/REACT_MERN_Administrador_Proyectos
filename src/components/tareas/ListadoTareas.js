import React, {Fragment,useContext} from 'react';
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListadoTareas =() =>{

    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto,eliminarProyecto } = proyectosContext;


    // Obtner las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    // Si no hay proyecto seleccionado
    if (!proyecto) return <h2>Seleccionado un proyecto</h2>;

    // Array destructuring para extraer el proyecto actual
    const [ proyecActual ] = proyecto;


    // Eliminar un proyecto
    const onClickEliminar = () =>{
        eliminarProyecto(proyecActual.id)
    };

    return(
       <Fragment>
           <h2>Proyecto: {proyecActual.nombre}</h2>
           <ul className="listado-tareas">
               {tareasproyecto.length === 0
                   ?(<li className="tarea"><p>No hay tareas</p></li> )
                   :tareasproyecto.map(tarea =>(<Tarea tarea={tarea} />))
               }
               <button type="button" className="btn btn-eliminar" onClick={onClickEliminar}>Eliminar Proyecto &times;</button>

           </ul>
       </Fragment>
    )
};


export default ListadoTareas;
