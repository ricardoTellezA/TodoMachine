import React from 'react';
import './TodoCounter.css';



const TodoConter = ({total, completed}) => {

    return (
        <div>
             <h2 className="todoCounter">Has completado {completed} de {total} TODOs</h2>
        </div>
    )
}

export default TodoConter;
