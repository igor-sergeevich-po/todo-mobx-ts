import './style.css';

const Todo = () => {
	return (
		<div className='todo'>
			<h5>name</h5>
			<span>description</span>
			<label>
				выполнено?
				<input type='checkbox' />
			</label>
		</div>

	);
};

export default Todo;
