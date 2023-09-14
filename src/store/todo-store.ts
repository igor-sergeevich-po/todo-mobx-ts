import { action, makeObservable, observable } from 'mobx';
import mockTodos from '../assets/mockTodos';


export interface ITodo {
	id: string,
	name: string,
	description: string,
	isComplete: boolean
}

class TodosStore {
	todosList: ITodo[] = mockTodos;
	filteredTodosList: ITodo[] = [];
	flagFilter: boolean = false;
	isFiltered: 'Complete' | 'UnComplete' | '' = '';


	constructor() {
		makeObservable(this, {
			todosList: observable,
			filteredTodosList: observable,

			flagFilter: observable,
			isFiltered: observable,

			addTodo: action,
			removeTodo: action,
			filter: action,
			changeStatusTodo: action,
			setFilteredTodosList: action,

			setFlagFilter: action,
			setIsFiltered: action,
		});
	}

	addTodo = (todo: ITodo): void => {
		this.todosList.push(todo);
	};

	removeTodo = (id: string): void => {
		this.todosList = this.todosList.filter(todo => todo.id !== id);
	};

	filter = (isComplete: boolean): ITodo[] => {
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

	setFilteredTodosList = (list: ITodo[]): void => {
		this.filteredTodosList = list;
	};

	setFlagFilter = (flag: boolean): void => {
		this.flagFilter = flag;
	};

	setIsFiltered = (flag: 'Complete' | 'UnComplete' | ''): void => {
		this.isFiltered = flag;
	};
}

export default new TodosStore();