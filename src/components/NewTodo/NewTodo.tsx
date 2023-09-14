import { useState } from 'react';
import TodosStore from '../../store/todo-store';
import { v4 as uuid } from 'uuid';
import './style.css';

const NewTodo = () => {
	const [titleTodo, setTitleTodo] = useState('');
	const { addTodo } = TodosStore;
	const todo = {
		id: uuid(),
		name: titleTodo,
		description: 'описание задачи',
		isComplete: false
	};

	function addTodoItem() {
		if (titleTodo.length > 5) {

			addTodo(todo);
			setTitleTodo('');
		} else {
			alert('слишком короткое название, введите больше 5 символов');
		}
	}
	return (
		<form action='#' className='newTodo'>
			<input onChange={(evt) => setTitleTodo(evt.target.value)} type="text" placeholder='текст новой задачи' value={titleTodo} />
			<input onClick={() => addTodoItem()} type='submit' value='Добавить' />
		</form>
	);
};

export default NewTodo;
