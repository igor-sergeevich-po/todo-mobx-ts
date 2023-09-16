import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		debug: true,
		fallbackLng: 'en',
		resources: {
			ru: {
				translation: {
					completed: 'выполненные',
					unCompleted: 'незавершеные',
					filters: 'Фильтры :',
					language: 'Язык :',
					add: 'добавить',
					placeholderNewTodo: 'имя новой задачи',

					update: 'обновить',
					task: 'задача :',
					description: 'описание :',
					edit: 'режим редактирования :',
					completedTodo: 'выполнено ? :',
					shortName: 'слишком короткое название, введите больше 5 символов',
					addNewTask: 'Добавьте новые задачи',
					noCompletedTasks: 'нет оконченых задач',

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

					update: 'update',
					edit: 'edit mode :',
					task: 'task :',
					desctiption: 'description :',
					completedTodo: 'completed ? :',
					shortName: 'short name or description',
					addNewTask: 'add new task',
					noCompletedTasks: 'noCompletedTasks',
				}
			}
		}
	});