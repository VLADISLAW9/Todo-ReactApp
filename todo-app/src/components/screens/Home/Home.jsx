import React, { useState } from 'react'
import CreateTodoField from './Item/CreateTodoField'
import TodoItem from './Item/TodoItem'

const data = [
	{
		_id: '1',
		title: 'Сделать домашнее задание',
		isComplete: true,
	},

	{
		_id: '2',
		title: 'Погулять с собакой',
		isComplete: false,
	},

	{
		_id: '3',
		title: 'Помыть посуду',
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
		<div className=' text-white w-3/5 mx-auto'>
			<CreateTodoField setTodos={setTodos}/>
			{todos.map(todo => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
		</div>
	)
}

export default Home
