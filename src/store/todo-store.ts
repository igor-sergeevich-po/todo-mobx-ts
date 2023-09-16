import { action, makeObservable, observable } from 'mobx';
import mockTodos from '../assets/mockTodos';
// import { ITodo } from './todo-store';


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
	modalMessage: string = '';
	editedTodo: ITodo[] = [];


	constructor() {
		makeObservable(this, {
			modalMessage: observable,
			todosList: observable,
			filteredTodosList: observable,
			editedTodo: observable,

			flagFilter: observable,
			isFiltered: observable,

			addTodo: action,
			removeTodo: action,
			filter: action,
			changeStatusTodo: action,
			setFilteredTodosList: action,

			setFlagFilter: action,
			setIsFiltered: action,

			setModalMessage: action,

			setEditedTodo: action,
			saveEditedTodo: action
		});
	}

	addTodo = (todo: ITodo): void => {
		this.todosList.push(todo);
	};

	removeTodo = (id: string): void => {
		this.todosList = this.todosList.filter(todo => todo.id !== id);
		this.filteredTodosList = this.filteredTodosList.filter(todo => todo.id !== id);
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

	setModalMessage = (message: string): void => {
		this.modalMessage = message;
	};

	setEditedTodo = (id: string): void => {
		this.editedTodo = this.todosList.filter(todo => todo.id === id);
	};

	saveEditedTodo = (updTodo: ITodo): void => {
		this.todosList = this.todosList.map(todo => {
			if (todo.id === updTodo.id) {
				return updTodo;
			} else {
				return todo;
			}
		});

		this.filteredTodosList = this.todosList.map(todo => {
			if (todo.id === updTodo.id) {
				return updTodo;
			} else {
				return todo;
			}
		});
	};
}

export default new TodosStore();