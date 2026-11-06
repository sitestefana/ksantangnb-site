// Плавная прокрутка по якорям
document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Копирование контактов по клику
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', e => {
        const value = card.querySelector('.value')?.textContent;
        if (value && !card.href) {
            navigator.clipboard?.writeText(value);
        }
    });
});

console.log('✅ Сайт "Нефтяная химия в России №1" загружен');