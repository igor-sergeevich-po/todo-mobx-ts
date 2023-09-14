import { observer } from 'mobx-react-lite';
import './style.css';


const Filter = observer(() => {
	return (
		<div className='filter'>
			<div className='filter_content'>
				<span>Фильтры:</span>
				<div className='filter_conten-buttons'>
					<button className='filter-btn'> completed</button>
					<button className='filter-btn'> unCompleted</button>
				</div>
			</div >
		</div >
	);
});

export default Filter;
