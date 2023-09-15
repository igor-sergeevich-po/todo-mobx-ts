import { observer } from 'mobx-react-lite';
import TodosStore from '../../store/todo-store';
import './style.css';

const Modal = observer(() => {
	const { modalMessage } = TodosStore;

	function handleHide(modal: HTMLElement) {
		if (modal.classList.contains('fon_modal')) {
			modal.classList.add('hide');
		}
	}

	return (
		<div id='modal' className='fon_modal hide'
			onClick={(evt) => handleHide(evt.target as HTMLElement)}>
			<div className='modal'>
				{modalMessage}
			</div>
		</div>
	);
});

export default Modal;
