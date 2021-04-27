import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    const proyectos = [
        { nombre: 'tienda 1' },
        { nombre: 'tienda 2' },
        { nombre: 'tienda 3' },
    ]
    return (


        <ul className="listado-proyectos">
            {proyectos.map(proyecto => (
                <Proyecto
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProyectos;