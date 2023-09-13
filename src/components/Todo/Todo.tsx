
import { ITodo } from './../../store/todo-store';
import './style.css';


const Todo = ({ todo, changeStatusTodo }: { todo: ITodo, changeStatusTodo: { (id: string): void } }) => {
	const style = `todo ${todo.isComplete && 'isComplete'}`;
	return (
		<div className={style}>
			<h5>{todo.name}</h5>
			<span>{todo.description}</span>
			<label>
				выполнено?
				<input onChange={(evt) => changeStatusTodo(evt.target.id)} id={todo.id} type='checkbox' checked={todo.isComplete} />
			</label>
		</div>
	);
};

export default Todo;
