import Todo from '../Todo/Todo';
import TodosStore from '../../store/todo-store';
import { observer } from 'mobx-react-lite';
import { injectStores } from '@mobx-devtools/tools';
import './style.css';

// for debug
injectStores({
	TodosStore
});


const TodoList = observer(() => {
	const { todosList, changeStatusTodo, removeTodo } = TodosStore;
	return (
		<div className='todo-list'>
			{todosList?.map(todo => <Todo key={todo.id} todo={todo} changeStatusTodo={changeStatusTodo} removeTodo={removeTodo} />)}
		</div>
	);
});

export default TodoList;
