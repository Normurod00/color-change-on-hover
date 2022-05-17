let boxex  = document.querySelectorAll('.box')

boxex.forEach(box =>
{
    box.onclick = () =>{
        console.log('clik');
    }
    let box = document.querySelector('.box');

    // Генерируем и устанавливаем рандомный фон
    const setRandomBg = _ => box.style.background = Array(...Array(6)).reduce(_ => _ += [Math.floor(Math.random() * 16)], '#');

    // При наведении курсора на объект
    box.addEventListener('onclick', _ => {
        // Ставим новый цвет
        setRandomBg();
        // Перезапускаем анимацию (да, на хак похоже, но увы, пока что есть)
        box.classList.remove('anim');
        setTimeout(_ => box.classList.add('anim'), 10);
    });
    // По окончании итерации анимации, меняем фон
    box.addEventListener('animationiteration', _ => setRandomBg());

    setRandomBg();
}
)
