
import './style.css';

const RemoveBtn = ({ removeTodo, id }: { removeTodo: { (id: string): void }, id: string }) => {

	return (
		<div className='remove-btn' onClick={() => removeTodo(id)} >
			x
		</div>
	);
};

export default RemoveBtn;