
import TodosStore from '../../store/todo-store';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import './style.css';

const lngs = {
	ru: { nativeName: 'Русский' },
	en: { nativeName: 'English' }
};

const Filter = observer(() => {
	const { t, i18n } = useTranslation();

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
			<span>{t('language')}</span>
			{Object.keys(lngs).map(lng => (
				<button className='filter-btn' type='submit' key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lng}</button>
			))}
			<div className='filter_content'>
				<span>{t('filters')}</span>
				<div className='filter_conten-buttons'>
					<button className={styleBtnCompleted} id='completed'
						onClick={() => handleFilterComplete()}
					>{t('completed')}</button>
					<button className={styleBtnUnCompleted} id='unCompleted'
						onClick={() => handleFilterUnComplete()}
					>{t('unCompleted')}</button>
				</div>
			</div >
		</div >
	);
});

export default Filter;
