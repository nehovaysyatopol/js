var login = prompt('Введите логин');

if(login == 'Адмін'){
	var pass = prompt('Введите пароль');
	pass == 'пароль' ? alert('Ласкаво просимо!') : alert('Пароль неправильний');
} else {
	alert('Я вас не знаю!');
}

document.onkeydown = function(evt) {
    evt = evt || window.event;  //функцию нашел в интернете, что делает эта строчка, честно говоря, не знаю пока
    if (evt.keyCode == 27) {
        alert('Вхід відмінено');
    }
};