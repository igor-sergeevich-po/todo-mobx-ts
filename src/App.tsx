import NewTodo from './components/NewTodo/NewTodo';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
	return (
		<div className="App">
			<Modal />
			<NewTodo />
			<Filter />
			<TodoList />
		</div>
	);
}

export default App;
