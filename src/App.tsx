import NewTodo from './components/NewTodo/NewTodo';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';
import './App.css';

function App() {
	return (
		<div className="App">
			<NewTodo />
			<Filter />
			<TodoList />
		</div>
	);
}

export default App;
