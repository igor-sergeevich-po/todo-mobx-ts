
import RemoveBtn from '../RemoveButton/RemoveButton';
import { ITodo } from './../../store/todo-store';
import EditButton from '../EditButton/EditButton';
import { useTranslation } from 'react-i18next';
import './style.css';


const Todo = ({ todo, changeStatusTodo, removeTodo }: {
	todo: ITodo, changeStatusTodo: { (id: string): void }, removeTodo: {
		(id: string): void
	}
}) => {
	const { t } = useTranslation();

	const style = `todo ${todo.isComplete && 'isComplete'}`;
	return (
		<div className={style}>
			<RemoveBtn removeTodo={removeTodo} id={todo.id} />
			<EditButton id={todo.id} />
			<h5>{todo.name}</h5>
			<span>{todo.description}</span>
			<label>
				{t('completed')}? :
				<input onChange={(evt) => changeStatusTodo(evt.target.id)} id={todo.id} type='checkbox' checked={todo.isComplete} />
			</label>
		</div>
	);
};

export default Todo;
