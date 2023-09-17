import { useState } from 'react';
import TodosStore from '../../store/todo-store';
import { v4 as uuid } from 'uuid';
import { observer } from 'mobx-react-lite';
import { removeClassButton } from '../../helpFun/removeClassButton';
import { useTranslation } from 'react-i18next';
import { body } from '../Modal/Modal';
import './style.css';


const NewTodo = observer(() => {
	const [titleTodo, setTitleTodo] = useState('');
	const [descriptionTodo, setDescriptionTodo] = useState('');

	const { addTodo, setModalMessage, setFlagFilter } = TodosStore;
	const { t } = useTranslation();

	const todo = {
		id: uuid(),
		name: titleTodo,
		description: descriptionTodo,
		isComplete: false
	};

	function addTodoItem() {
		const modal = document.getElementById('modal');


		if (titleTodo.length > 5 && titleTodo.replace(/\s/g, '') && descriptionTodo.replace(/\s/g, '')) {
			// добавляю туду в стейт
			body.classList.remove('overflowHide');

			addTodo(todo);
			// очищаю поля ввода от ненужного
			setTitleTodo('');
			setDescriptionTodo('');

			// удаляю класс active с кнопок при добавлении новой записи
			setFlagFilter(false);
			removeClassButton();

		} else {
			body.classList.add('overflowHide');

			const modalMsg = t('shortName');
			// устанавливаю сообщение с ошибкой в модалку
			setModalMessage(modalMsg);

			// очищаю поле с именем новой туду
			setTitleTodo('');
			// показываю пользователю модалку с сообщением
			modal?.classList.remove('hide');
		}
	}
	return (
		<form action='#' className='newTodo'>
			<input onChange={(evt) => setTitleTodo(evt.target.value)}
				type="text" placeholder={t('placeholderNewTodo')} value={titleTodo} />
			<input onChange={(evt) => setDescriptionTodo(evt.target.value)} type="text" placeholder={t('placeholderNewTodoDescription')} value={descriptionTodo} />
			<input className='add' onClick={() => addTodoItem()} type='button' value={t('add')} />
		</form>
	);
});

export default NewTodo;
