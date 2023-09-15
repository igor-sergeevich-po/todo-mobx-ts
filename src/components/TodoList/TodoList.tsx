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

	const { todosList, changeStatusTodo,
		removeTodo, filteredTodosList, flagFilter } = TodosStore;

	return (
		<div className='todo-list'>
			{!todosList.length && 'Добавьте новые задачи' || flagFilter && !filteredTodosList.length && 'нет выполненных задач'}

			{!flagFilter && todosList?.map(todo => <Todo
				key={todo.id} todo={todo} changeStatusTodo={changeStatusTodo}
				removeTodo={removeTodo} />)}

			{flagFilter && filteredTodosList?.map(todo => <Todo
				key={todo.id} todo={todo} changeStatusTodo={changeStatusTodo}
				removeTodo={removeTodo} />)}

		</div>
	);
});

export default TodoList;
