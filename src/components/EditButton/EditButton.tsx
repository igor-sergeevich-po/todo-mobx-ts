import TodosStore from '../../store/todo-store';
import './style.css';


const EditButton = ({ id }: { id: string }) => {
	const { setEditedTodo, setModalMessage } = TodosStore;

	const handleClick = () => {
		const modal = document.getElementById('modal');
		setEditedTodo(id);
		setModalMessage('');
		modal?.classList.remove('hide');
	};
	return (
		<div>
			<div onClick={() => handleClick()} className='remove-btn move-left'>e</div>
		</div>
	);
};

export default EditButton;
