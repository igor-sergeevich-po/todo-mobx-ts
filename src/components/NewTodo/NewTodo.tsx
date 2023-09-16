import { useState } from 'react';
import TodosStore from '../../store/todo-store';
import { v4 as uuid } from 'uuid';
import { observer } from 'mobx-react-lite';
import { removeClassButton } from '../../helpFun/removeClassButton';
import { useTranslation } from 'react-i18next';
import './style.css';


const NewTodo = observer(() => {
	const [titleTodo, setTitleTodo] = useState('');
	const { addTodo, setModalMessage, setFlagFilter } = TodosStore;
	const { t } = useTranslation();

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
			const modalMsg = t('shortName');

			setModalMessage(modalMsg);
			setTitleTodo('');

			modal?.classList.remove('hide');
		}
	}
	return (
		<form action='#' className='newTodo'>
			<input onChange={(evt) => setTitleTodo(evt.target.value)}
				type="text" placeholder={t('placeholderNewTodo')} value={titleTodo} />
			<input onClick={() => addTodoItem()} type='button' value={t('add')} />
		</form>
	);
});

export default NewTodo;
