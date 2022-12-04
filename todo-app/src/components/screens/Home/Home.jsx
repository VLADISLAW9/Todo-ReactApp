import React, { useState } from 'react'
import CreateTodoField from './Item/CreateTodoField'
import TodoItem from './Item/TodoItem'

const data = [
	{
		_id: '1',
		title: 'First task',
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
	},
]

const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isComplete = !current.isComplete
		setTodos(copy)
	}

	const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

	

	return (
		<div className=' text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-8'>MY TODOS</h1>
			{todos.map(todo => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
			<CreateTodoField setTodos={setTodos}/>
		</div>
	)
}

export default Home
