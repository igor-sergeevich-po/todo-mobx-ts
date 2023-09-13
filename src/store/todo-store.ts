import { action, makeObservable, observable } from 'mobx';
import mockTodos from '../assets/mockTodos';

interface Todo {
	id: string,
	name: string,
	description: string,
	isComplete: boolean
}

class TodosStore {
	todosList: Todo[] = mockTodos;
	filteredTodosList: Todo[] = [];

	constructor() {
		makeObservable(this, {
			todosList: observable,
			filteredTodosList: observable,
			addTodo: action,
			removeTodo: action,
			filter: action,
			changeStatusTodo: action,
			setFilteredTodosList: action

		});
	}

	addTodo = (todo: Todo): void => {
		this.todosList.push(todo);
	};

	removeTodo = (id: string): void => {
		this.todosList = this.todosList.filter(todo => todo.id !== id);
	};

	filter = (isComplete: boolean): Todo[] => {
		return this.todosList.filter(todo => todo.isComplete === isComplete);
	};

	changeStatusTodo = (id: string): void => {
		this.todosList = this.todosList.filter(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
				return todo;
			} else {
				return todo;
			}
		});
	};

	setFilteredTodosList = (list: Todo[]): void => {
		this.filteredTodosList = list;
	}
}

export default new TodosStore();