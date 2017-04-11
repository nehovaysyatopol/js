var a = prompt('Введите первое число');
var b = prompt('Введите второе число');

if(a.trim() === '' || b.trim() === '' || isNaN(a) || isNaN(b)){

	alert('Вводить можно только числа!');

} else {

	var result;
	var text;

	a = +a;
	b = +b;

	if(a > b){
		result = a - b;
		text = 'Результат вычитания';
	} else if(a < b) {
		result = a + b;
		text = 'Результат сложения';
	} else {
		text = 'Не вводите одинаковые числа!';
	}

	if(result != null){
		alert('Результат умножения: ' + a*b + ', ' + text + ': ' + result);
	} else {
		alert(text);
	}

}