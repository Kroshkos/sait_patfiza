document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение браузера
        const targetId = this.getAttribute('data-target'); // Получаем id целевого элемента
        const leftSide = document.getElementById(targetId); // Получаем элемент по id
        const descriptionId = this.getAttribute('data-description'); // Получаем id описания
        const description = document.getElementById(descriptionId); // Получаем блок с текстом

        console.log(`Button clicked: ${this.innerText}`);
        console.log(`Target ID: ${targetId}`);
        console.log(`Description ID: ${descriptionId}`);

        if (description) { // Проверяем, существует ли элемент description
            description.classList.toggle('expanded'); // Добавляем или убираем класс "expanded"
            console.log(`Description exists. Expanded: ${description.classList.contains('expanded')}`);
        } else {
            console.error(`Element with id ${descriptionId} not found.`);
            return; // Если элемент не найден, выходим из функции
        }

        // Изменяем текст кнопки в зависимости от состояния
        if (description.classList.contains('expanded')) {
            this.innerText = 'Скрыть'; // Меняем текст кнопки
            if (leftSide) {
                leftSide.remove(); // Удаляем целевой элемент
                console.log(`Left side ${targetId} removed.`);
            } else {
                console.error(`Element with id ${targetId} not found.`);
            }
        } else {
            this.innerText = 'Читать далее'; // Меняем текст кнопки
            const newLeftSide = document.createElement('div'); // Создаем новый элемент left-side
            newLeftSide.className = 'left-side'; // Присваиваем ему класс
            newLeftSide.id = targetId; // Устанавливаем id
            newLeftSide.innerHTML = `
                <div class="achievement-slider">
                    <img src="images/zigan.jpg" alt="Достижение 1" class="achievement-image active">
                    <img src="images/pic04.jpg" alt="Достижение 2" class="achievement-image">
                    <img src="images/mainBanner.jpg" alt="Достижение 3" class="achievement-image">
                </div>
            `; // Добавляем содержимое слайдера
            this.parentElement.parentElement.insertBefore(newLeftSide, this.parentElement); // Вставляем новый элемент перед кнопкой
            console.log(`Left side ${targetId} created.`);
        }
    });
});
