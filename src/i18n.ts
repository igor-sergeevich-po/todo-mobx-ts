import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		debug: false,
		fallbackLng: 'en',
		resources: {
			ru: {
				translation: {
					completed: 'выполненные',
					unCompleted: 'актуальные',
					filters: 'Фильтры :',
					language: 'Язык :',
					add: 'добавить',
					placeholderNewTodo: 'имя новой задачи',
					placeholderNewTodoDescription: 'описание',

					update: 'обновить',
					task: 'задача :',
					description: 'описание',
					edit: 'режим редактирования :',
					completedTodo: 'выполнено',
					shortName: 'Слишком короткое название, введите больше 5 символов',
					addNewTask: 'Добавьте новые задачи',
					noCompletedTasks: 'Нет оконченных задач',

				}
			},
			en: {
				translation: {
					completed: 'completed',
					unCompleted: 'uncompleted',
					filters: 'Filters :',
					language: 'Language: ',
					add: 'add',
					placeholderNewTodo: 'name of new task',
					placeholderNewTodoDescription: 'description',

					update: 'update',
					edit: 'edit mode :',
					task: 'task :',
					desctiption: 'description',
					completedTodo: 'completed',
					shortName: 'Short name or description',
					addNewTask: 'Add new task',
					noCompletedTasks: 'No completed tasks',
				}
			}
		}
	});