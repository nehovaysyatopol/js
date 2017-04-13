var arr = [];
var number;
var stop = false;
var sum = 0;

do {

	number = prompt('Введите число');

	if(number != '' && number != null){
		if(isNaN(number) || number.trim() === ''){
			alert('Вводить можно только числа!');
			continue;
		} else {
			arr.push(+number);
		}
	} else {
		stop = true;
	}

} while(!stop);

for (var i = 0; i < arr.length; i++){
	sum += arr[i];
}

alert('Сумма всех чисел массива = ' + sum);