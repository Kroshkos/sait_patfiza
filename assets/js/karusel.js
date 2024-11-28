document.querySelectorAll('.achievement-slider').forEach(slider => {
    let currentIndex = 0;
    const images = slider.querySelectorAll('.achievement-image');
    const totalImages = images.length;

    // Устанавливаем первое изображение как активное
    images[currentIndex].classList.add('active');

    function showNextImage() {
        images[currentIndex].classList.remove('active'); // Скрыть текущее изображение
        currentIndex = (currentIndex + 1) % totalImages; // Перейти к следующему изображению
        images[currentIndex].classList.add('active'); // Показать следующее изображение
    }

    // Меняем изображение каждые 3 секунды
    setInterval(showNextImage, 3000);
});


