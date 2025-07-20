

  document.querySelector('.hero-cta').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#brief').scrollIntoView({ behavior: 'smooth' });
  });

 document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
  });

  // Маска для телефона (минимальный пример)
  
//   // Обработка отправки (заглушка — сюда вставим Telegram)
//   document.getElementById('briefForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert("Форма отправлена! (пока без Telegram)");
//     // Здесь будет отправка в Telegram
//   });



document.querySelectorAll('.select-multiple').forEach(select => {
    select.addEventListener('mousedown', function (e) {
        e.preventDefault();
        const option = e.target;
        if (option.tagName === 'OPTION') {
            option.selected = !option.selected;
            const event = new Event('change', {bubbles: true});
            select.dispatchEvent(event);
        }
     });
});


var element = document.getElementById('phone');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false,
    
}
var mask = new IMask(element, maskOptions);