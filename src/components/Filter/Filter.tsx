
import TodosStore from '../../store/todo-store';
import { observer } from 'mobx-react-lite';
import './style.css';

const Filter = observer(() => {
	const { filter, setFilteredTodosList, setFlagFilter,
		setIsFiltered, flagFilter, isFiltered } = TodosStore;

	const styleBtnCompleted = `filter-btn ${isFiltered === 'Complete' ? 'active' : ''}`;
	const styleBtnUnCompleted = `filter-btn ${isFiltered === 'UnComplete' ? 'active' : ''}`;

	function handleFilterComplete() {

		if (!flagFilter || flagFilter && isFiltered === 'UnComplete') {
			setFilteredTodosList(filter(true));
			setFlagFilter(true);
			setIsFiltered('Complete');

		} else if (flagFilter) {
			setFilteredTodosList([]);
			setFlagFilter(false);
			setIsFiltered('');
		}
	}
	function handleFilterUnComplete() {

		if (!flagFilter || flagFilter && isFiltered === 'Complete') {
			setFlagFilter(true);
			setFilteredTodosList(filter(false));
			setIsFiltered('UnComplete');

		} else if (flagFilter) {
			setFlagFilter(false);
			setFilteredTodosList([]);
			setIsFiltered('');
		}
	}
	return (
		<div className='filter'>
			<div className='filter_content'>
				<span>Фильтры:</span>
				<div className='filter_conten-buttons'>
					<button className={styleBtnCompleted} id='completed'
						onClick={() => handleFilterComplete()}
					> completed</button>
					<button className={styleBtnUnCompleted} id='unCompleted'
						onClick={() => handleFilterUnComplete()}
					> unCompleted</button>
				</div>
			</div >
		</div >
	);
});

export default Filter;
