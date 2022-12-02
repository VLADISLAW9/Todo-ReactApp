import React from 'react';
import Check from './Check';


const TodoItem = ({todo}) => {
    return (
        <button className='flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
            <Check/>
            {todo.title}
        </button>
    )
}

export default TodoItem