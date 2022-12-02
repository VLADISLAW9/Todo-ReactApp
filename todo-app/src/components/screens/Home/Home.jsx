import React from 'react';
import TodoItem from './Item/TodoItem';


const data = [
    {
        _id: '1',
        title: 'Firts task',
        isComplete: false,
    },

    {
        _id: '2',
        title: 'Second task',
        isComplete: false,
    },

    {
        _id: '3',
        title: 'Fed task',
        isComplete: false,
    }
]

const Home = () => {
    return (
        <div className=' text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-8'>MY TODOS</h1>
           {data.map(todo => 
                <TodoItem key={todo._id} todo={todo}/>
            )}
        </div>
    )
}

export default Home