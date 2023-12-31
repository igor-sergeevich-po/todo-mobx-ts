import TodosStore from '../../store/todo-store';
import { body } from '../Modal/Modal';
import './style.css';


const EditButton = ({ id }: { id: string }) => {
	const { setEditedTodo, setModalMessage } = TodosStore;

	const handleClick = () => {
		const modal = document.getElementById('modal');

		// блокирую скролл при активной модалке
		body.classList.add('overflowHide');

		setEditedTodo(id);
		setModalMessage('');

		// убираю класс скрывающий модалку
		modal?.classList.remove('hide');
	};
	return (
		<div>
			<div onClick={() => handleClick()} className='remove-btn move-left'>e</div>
		</div>
	);
};

export default EditButton;
