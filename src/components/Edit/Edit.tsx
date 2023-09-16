import { useState } from 'react';
import TodosStore from '../../store/todo-store';
import { observer } from 'mobx-react-lite';
import { removeClassButton } from '../../helpFun/removeClassButton';
import './style.css';

const Edit = observer(() => {
	const { editedTodo, saveEditedTodo, setEditedTodo, setModalMessage } = TodosStore;
	const todo = JSON.parse(JSON.stringify(editedTodo))[0];

	const [name, setName] = useState(todo.name);
	const [description, setDescription] = useState(todo.description);

	function handleSaveTodo() {
		if (name.length > 4 && description !== '') {
			// скрыть модалку
			const modal = document.getElementById('modal') as HTMLElement;
			modal.classList.add('hide');
			// обновить данные тудушки
			const updatedTodo = { ...todo, name, description };

			// сохранить обновлённую тудушку
			saveEditedTodo(updatedTodo);
			// стираю значение предыдушей туду, всплывала предыдущая редактируемая туду
			setEditedTodo('');

			removeClassButton();
		} else {
			const modal = document.getElementById('modal');
			// alert('указано короткое имя или описание')
			setModalMessage('указано короткое имя или описание');


			modal?.classList.remove('hide');
		}
	}

	return (
		<form action='#' className='edit'>
			<h5>режим редактирования:</h5>
			<label>
				<p>задача:</p>
				<input type="text" onChange={
					(evt) => setName(evt.target.value)} value={name} />
			</label>
			<label>
				<p>описание:</p>
				<input type="text" onChange={
					(evt) => setDescription(evt.target.value)} value={description} />
			</label>
			<input className='update' onClick={() => handleSaveTodo()} type='button' value='Обновить' />
		</form>
	);
});

export default Edit;
