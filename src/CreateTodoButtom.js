import React from 'react'
import './CreateButtom.css';

const CreateTodoButtom = () => {
    const handleClick = (msf) => {
        alert(msf);
    }
    return (
        <div>
             <button
             onClick={() => handleClick('Create')}
             className="CreateTodoButton ">+</button>
        </div>
    )
}

export default CreateTodoButtom
