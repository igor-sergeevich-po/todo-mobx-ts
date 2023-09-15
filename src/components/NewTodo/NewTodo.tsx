import { useState } from 'react';
import TodosStore from '../../store/todo-store';
import { v4 as uuid } from 'uuid';
import './style.css';
import { observer } from 'mobx-react-lite';


const NewTodo = observer(() => {
	const [titleTodo, setTitleTodo] = useState('');
	const { addTodo, setModalMessage } = TodosStore;

	const todo = {
		id: uuid(),
		name: titleTodo,
		description: 'описание задачи',
		isComplete: false
	};

	function addTodoItem() {
		const modal = document.getElementById('modal');

		if (titleTodo.length > 5 && titleTodo.replace(/\s/g, '')) {
			addTodo(todo);
			setTitleTodo('');
		} else {
			setModalMessage('слишком короткое название, введите больше 5 символов');
			setTitleTodo('');

			modal?.classList.remove('hide');
		}
	}
	return (
		<form action='#' className='newTodo'>
			<input onChange={(evt) => setTitleTodo(evt.target.value)}
				type="text" placeholder='текст новой задачи' value={titleTodo} />
			<input onClick={() => addTodoItem()} type='submit' value='Добавить' />
		</form>
	);
});

export default NewTodo;
