import { observer } from 'mobx-react-lite';
import TodosStore from '../../store/todo-store';
import Edit from '../Edit/Edit';
import './style.css';

const Modal = observer(() => {
	const { modalMessage, editedTodo, setEditedTodo } = TodosStore;

	function handleHide(modal: HTMLElement) {
		if (modal.classList.contains('fon_modal')) {
			setEditedTodo('');
			modal.classList.add('hide');
		}
	}

	return (
		<div id='modal' className='fon_modal hide'
			onClick={(evt) => handleHide(evt.target as HTMLElement)}>
			<div className='modal'>
				{modalMessage ? <p>{modalMessage}</p> : ''}
				{editedTodo.length == 1 ? <Edit /> : ''}
			</div>
		</div>
	);
});

export default Modal;
