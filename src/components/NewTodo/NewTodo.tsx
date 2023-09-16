import { useState } from 'react';
import TodosStore from '../../store/todo-store';
import { v4 as uuid } from 'uuid';
import { observer } from 'mobx-react-lite';
import { removeClassButton } from '../../helpFun/removeClassButton';
import './style.css';


const NewTodo = observer(() => {
	const [titleTodo, setTitleTodo] = useState('');
	const { addTodo, setModalMessage, setFlagFilter } = TodosStore;

	// document.body.appendChild(form)
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

			// удаляю класс active с кнопок при добавлении новой записи
			setFlagFilter(false);
			removeClassButton();

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
			<input onClick={() => addTodoItem()} type='button' value='Добавить' />
		</form>
	);
});

export default NewTodo;
