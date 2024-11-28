document.querySelectorAll('.plitButton').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.classList.add('hover'); // Добавляем класс при наведении
    });
  
    button.addEventListener('mouseleave', () => {
      button.classList.remove('hover'); // Убираем класс при уходе курсора
    });
  });
  