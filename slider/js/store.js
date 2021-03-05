
//-----------------------------------------------------------
// store
//-----------------------------------------------------------
const store = new Vuex.Store({
	state: {
		storeMenu: [
			{link:'#courses-scroll',  name:'Курсы'},
			{link:'#teachers-scroll', name:'Преподаватели'},
			{link:'#steps-scroll',    name:'Обучение'},
			{link:'#map-scroll',      name:'Контакты'},
			{link:'#reviews-scroll',  name:'Отзывы'}
		],
		storeCourses: [
			{
				img:'img/courses/CSharp.jpg',
				name:'Программирование на C#. На основе интереса к компьютерным играм учимся программировать ',
				age:'Для ребят от 11 до 17 лет',
				price: 4000,
				description: 'Самый отработанный курс нашей школы. На этом курсе мы изучаем один из самых популярных языков программирования C#. <br> Понемногу, шаг за шагом, мы изучаем основные концепции языка программирования, общие принципы построения программ и документации к ним. Этот курс очень интересен для наших учеников, поскольку мы не просто учимся программировать - мы учимся создавать компьюерные игры.',
				teacher: 0,
				modules: [
					{name:'Модуль 1', theme:'Основы C#', descriptionPreview:'Начинаем с нуля и изучаем среду программирования и основы языка. Пишем несколько разных игр.', description:'Изучаем Среду программирования и основные понятия программирования: переменные, условия, циклы. Всё это изучаем в приложении к конкретным практическим задачам.  <br> Параллельно с изучением программирования переносим интерес с компьютерных игр на их создание. <br>  Так же формируем образ мышления программиста: Видение результата, системное мышление, разбиение сложных задач на простые подзадачи. '},
					{name:'Модуль 2', theme:'C# Для продвинутых', descriptionPreview:'Углубленное изучение программирования. Плюс объектно-ориентированное программирование. Весь модуль пишем одну игру.', description:'Продолжаем изучение программирования. Изучаем новые концепции и принципы. Меньше полагаемся на чужие разработки, больше пишем своего. <br>  Так же показываем как строятся игры, что в них главное, что второстепенное. Практически разбираем общую концепцию компьютерных игр на составляющие и изучаем.'},
					{name:'Модуль 3', theme:'Сетевое программирование', descriptionPreview:'Создаем бота для социальных сетей, и на его примере изучаем работу по сети, и командное программирование. Изучаем работу через API и Систему управления версий GitHub.', description:'Сетевое программирование<br>Самое востребованное в современном мире - разработка программ для работы в интернете. И именно это мы изучаем на нашем 3 модуле. <br> Командная работа <br>Каждому программисту приходится работать в команде, а значит мы рассматриваем инструменты для командной работы. Такие как GitHub. '},
					{name:'Модуль 4', theme:'3D программирование на Unity', descriptionPreview:'Самый сложный и самый интересный модуль! На нем создаем свою 3D игру.', description:'Самый сложный и самый интересный модуль. Здесь изучаем работу в 3D. Кроме подробной работы с геометрией пространства и программирования здесь мы изучаем основные методы разработки 3D игр. <bd> Результатом этого модуля будет собственная 3D игра под любую платформу: Windows, Linux, Mac, Android, iOS.'}
				],
				projects: [
					'img/projects/cs-1.png'
				]
			},
			{
				img:'img/courses/3d.jpg',
				name:'3D компьютерная графика и анимация.',
				age:'для школьников от 16 лет и для взрослых',
				price: 3600,
				description: 'Курс по созданию 3D графики. Лучший очный курс 3D по Пензе.',
				teacher: 2,
				modules: [
					{name:'Модуль 1', theme:'Основы работы в Blender', descriptionPreview:'Изучаем самые основы. Интерфейс, взаимодействие со средой.', description:'На этом модуле мы подробно рассмотрим основные понятия рендера и анимации. Программное обеспечение для создания, обработки и воспроизведения компьютерной графики. Пакет для создания трехмерной компьютерной графики – Blender. Интерфейс Blender. Типы окон. Окно пользовательских настроек. Открытие, сохранение и прикрепление файлов. Команда сохранения. Команда прикрепить или связать (Append or Link). Упаковка данных. Импорт объектов. Работа с окнами видов. Перемещение в 3D пространстве.'},
					{name:'Модуль 2', theme:'Объекты', descriptionPreview:'Объекты, ткстуры, материалы и окружение.', description:'Работа с основными меш-объектами. Использование главных модификаторов для манипуляции меш-объектами. Режим редактирования – редактирование вершин меш-объекта. Режим пропорционального редактирования вершин. Объединение / разделение меш-объектов. Вершины и грани. Булевы операции. Булевы модификаторы. Основные настройки материала. Настройки Halo. Наложение Материалов. Основные настройки текстур. Использование изображений и видео в качестве текстур. Карты смещений (Displacement Mapping). Наложение текстур. Использование цвета, звезд и тумана. Создание 3D фона облаков. Использование изображения в качестве фона.'},
					{name:'Модуль 3', theme:'Освещение и камеры', descriptionPreview:'Камеры, освещение, лучи, рендер.', description:'Настройки камеры. Типы освещения и их настройки. Настройка Spot - лампы (прожекторная лампа). Ненаправленное Освещение (Emit). Освещение и тени. Основы теории трассировки лучей. Отражение (зеркальность) и преломление (прозрачность и искажение). Основные опции настройки рендера. Интерфейс и настройки рендера. Установки сцены (Scene). Рендер JPEG изображения. Создание видео файла.'},
					{name:'Модуль 4', theme:'Анимация', descriptionPreview:'Анимация, NURBS-поверхности, системы частиц', description:'Основы создания ключей анимации и автоматическое создание ключевых кадров. Анимация движение, вращение и масштабирование. Работа с редактором графов и диаграммой ключей. Анимирование материалов, ламп и настроек окружения. Использование NURBS для создания изогнутых форм (поверхностей). Эффект жидкости и капель с использованием метa-форм. Модификаторы генерации формы. Модификаторы искажения формы. Эффект построения (Build). Эффект волны (Wave). Модификаторы симуляции. Эффекты взрыва. Симуляция огня. Симуляция жидкости. Настройка частиц и влияние материалов. Взаимодействие частиц с объектами и силами. Использование частиц для создания волос.Основные понятия связывания объектов методом потомок-родитель. Использование объектов со связью потомок-родитель. Настройка центра объекта (опорной точки). Использование арматуры для деформации меша. Создание групп вершин. Использование инверсной кинематики (IK).'},
					{name:'Модуль 5', theme:'Физика', descriptionPreview:'Здесь мы изучим основы физики в 3D мире.', description:'Использование системы мягких тел. Создание ткани. Симуляция жидкости (Fluid). Простой всплеск. Поток жидкости. Создание объемного дыма.'}
				],
				projects: [
					'img/projects/3D_1.jpg',
					'img/projects/3D_2.jpg',
					'img/projects/3d-3.jpg',
					'img/projects/3d-4.jpg',
				]
			},
			{
				img:'img/courses/Admin.png',
				name:'Информационная безопасность: "Админ против хакера". ',
				age:'от 14 до 19 лет',
				price: 4000,
				description: 'На этом курсе Вы изучите методы получения доступа к информации и информационным системам (этичный хакинг) и средства предотвращения такого доступа (информационная безопасность). ',
				teacher: 2,
				modules: [
					{name:'Модуль 1', theme:'Компьютер глазами хакера', descriptionPreview:'На этом модуле изучаем оборудование - сборка, загрузка, аппаратная защита и шифрование, работа с жестким диском.', description:'За этом модуле мы научимся собирать компьютер, создавать загрузочную флешку, устанавливать и обходить пароль на загрузку. А еще научимся устанавливать Windows и работать с его паролями, шифровать, восстанавливать удаленные и находить скрытытые файлы. Но это только начало...'},
					{name:'Модуль 2', theme:'Windows глазами хакера', descriptionPreview:'На этом модуле изучаем слабые и сильные стороны  Windows. Учимся вскрывать и увеличивать защиту Windows.', description:'Здесть изучаем защиту Windows. Получаем забытый пароль администратора и шифруем секретные файлы. Изучаем запущенные процессы и выискиваем среди них вредоносные. Выясняем, как получить доступ к акаунтам через куки, и как защититься от кражи аккаунтов. И под конц изучим виртуальные машины. '},
					{name:'Модуль 3', theme:'Интернет глазами хакера', descriptionPreview:'На этом модуле разбираемся с безопасностью локальных домашних сетей, беспроводных сетей и глобальных сетей. ', description:'Модуль мы начнем с настройки сетевого подключения. Разберем адрессацию в сети, научимся скрывать свой и отслеживать чужой IP-адрес. Разберемся с MAC-адресами и атаками с их использованием. Разберем безопасность WiFi - способы взлома и защиты. Выясним, как обезопасить IP-камеры. Научимся удаленно управлять чужим компьютером.'}
				],
				projects: [
			//		'img/projects/Python-1.jpg',
			//		'img/projects/project2.jpg'
				]
			},
				{
				img:'img/courses/Sites.jpg',
				name:'Web - разработка. От самых основ и до оплачиваемого сайта!',
				age:'Возрастные ограничения от 16 лет',
				price: 4000,
				description: 'На этом курсе мы научим вас создавать сайты, используя самые современные технологии. Доведем вас от самых основ и до первого, а возможно и второго сайта. По результатам курса отправим ваши проекты и контактные данные в несколько web-студий Пензы - как предложение прийти на стажировку. ',
				teacher: 1,
				modules: [
					{name:'Модуль 1', theme:'Основы верстки', descriptionPreview:'Изучаем основы верстки на HTML5 и CSS3.', description:'Подробного описания нет. Этот курс нужно показывать а не описывать. Запишитесь к нам на первое бесплатное занятие.'},
					{name:'Модуль 2', theme:'Web-программирование', descriptionPreview:'Допиливаем верстку сайта и начинаем наполнять свой сайт кодом', description:'Подробного описания нет. Этот курс нужно показывать а не описывать. Запишитесь к нам на первое бесплатное занятие.'}
				],
				projects: [
					'img/projects/web-1.png',
					'img/projects/web-2.png',
					'img/projects/web-3.png',
					'img/projects/web-4.png'
				]
			},
			// {
			// 	img:'',
			// 	name: 'Тестовый курс',
			// 	age: '',
			// 	price: 2,
			// 	description: '',
			// 	teacher: 0,
			// 	modules: [],
			// 	projects: []
			// },
		],
		storeTeachers: [
			{img:'img/teachers/Холуев.jpg', name:'Холуев Максим Александрович',    text:'Разработчик с 15-летним стажем, CRM-консультант, преподавал программирование в университете, также занимается маркетингом, активно выступает на различных конференциях как докладчик.'},
			{img:'img/teachers/Сергеенков.jpg', name:'Сергеенков Антон Сергеевич',    text:'Разработчик сайтов с 5 летним опытом, преподаватель с 4 летним стажем. Постоянно изучает что-то новое. На его курсе вы изучите только самые новейшие технологии.'},
			{img:'img/teachers/Такташкин.jpg', name:'Такташкин Денис Витальевич',    text:'Доцент, кандидат технических наук, программист, 3d моделлер, специалист по информационной безопасности и просто хороший человек. Преподает в 2х ВУЗах программирование и 3D. Консультирует по информационной безопасности. Благодаря своему огромному преподавательскому опыту подобрал идеальный способ преподавания таких сложных предметов как 3D графика и информационная безопасность. '},
			{img:'img/teachers/Холодков.jpg', name:'Холодков Данила Валерьевич',    text:'Преподает Web-разработку. Легко и непринужденно объясняет все темы курса. Очень хорошо разбирается в верстке и вообще в Web. '},
		],
		storeSteps: [
			{img:'img/steps/Clock.jpg', text:'Длительность занятия  1,5-2 часа'},
			{img:'img/steps/calendar.jpg', text:'2 занятия в неделю'},
			{img:'img/steps/practic.jpg', text:'Только практика'},
			{img:'img/steps/raspisanie.jpg', text:'- По будням вечером - Весь день в выходные'},
			{img:'img/steps/Видео.jpg', text:'Видео и методичка по урокам для домашних работ'},
			{img:'img/steps/sertificat.jpg', text:'Выдаем сертификаты'}
		],
		storeReviews: [
			{img:'img/reviews/in.jpg', name:'Александр Иняев', text:'Очень хорошая школа. За небольшой период времени был получен большой объём нужной информации в сфере IT, были освоены новые современные технологии. В IT-School грамотный отзывчивый педагогический состав.', link:'https://vk.com/id458998222'},
			{img:'img/reviews/sh.jpg', name:'Ахмет Шабакаев', text:'Впечатлений вагон и маленькая тележка. Замечательный преподаватель Антон и не менее замечательный "устроитель" курсов Максим, спасибо Вам за Ваш труд, надеюсь применить полученные знания на практике уже в ближайшее время. В любом случае дальше продолжу самосовершенствоваться в этом направлении!', link:'https://vk.com/id3098234'},
		//	{img:'img/reviews/reviews.jpg', name:'Zoe Saldana', text:'Я записала своего сына мы попробовали и теперь он программист. Поступил в ПГУ. Хочет продолжать карьеру программиста.', link:'https://vk.com/'},
		//	{img:'img/reviews/reviews.jpg', name:'Zoe Saldana', text:'Я записала своего сына мы попробовали и теперь он программист. Поступил в ПГУ. Хочет продолжать карьеру программиста.', link:'https://vk.com/'}
		]
		
	}
});




//-----------------------------------------------------------
// components
//-----------------------------------------------------------
Vue.component('modal', {
	template: '#template-modal',
	data: function () {
		return {
			name: null,
			phone: null,
			course: null,
			comment: null
		}
	},
	created() {
		this.course = this.showNumModal;	
	},
	methods: {
		submitModal() {
			var date = new Date();
			var dateStr = 
				date.getDate()      +'.'+
				(date.getMonth()+1) +'.'+
				date.getFullYear()  +' '+
				date.getHours()     +':'+
				date.getMinutes()   +':'+
				date.getSeconds();
			if (this.course != -1) {
				var nameCourse = this.storeCourses[this.course].name;
			} else {
				var nameCourse = 'Курс не выбран';
			}
			var message = 
				'<pre>'+
				'Имя:             '+this.name+'\n'+
				'Телефон:         '+this.phone+'\n'+
				'Название курса:  '+nameCourse+'\n'+
				'Номер курса:     '+this.course+'\n'+
				'Комментарий:     '+this.comment+'\n'+
				'Дата и время:    '+dateStr+'\n'+
				'Название кнопки: '+this.buttonModel+'\n'+
				'</pre>';
			this.sendMail(message);
			this.closeModal();
		},
		closeModal() {
			storeModal.commit('changeModalActive', {index:this.showIndexModal, modal:false, num:null, name:null});
		},
		sendMail(message) {
			axios.get(CURRENT_PATH+'module/mail/mail.php', {params: {message:message}})
			.then(response => {
				alert('Сообщение успешно отправлено');
				console.log(response.data);
			})
			.catch(error => console.log(error));
		}
	},
	computed: {
		storeCourses()   { return store.state.storeCourses; },
		showModal()      { return storeModal.state.showModal; },
		showNumModal()   { return storeModal.state.showNumModal; },
		showIndexModal() { return storeModal.state.showIndexModal; },
		buttonModel()    { return storeModal.state.buttonModel; }
	}
});
