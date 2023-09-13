import './style.css';

const NewTodo = () => {
	return (
		<form action='#' className='newTodo'>
			<input type="text" placeholder='текст новой задачи' />
			<input type='submit' value='Добавить' />
		</form>
	);
};

export default NewTodo;
