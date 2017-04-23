var calculator = {
	read: function(text){

		var numberOfVariable = prompt(text);

		if(numberOfVariable != null){
			if(!this.checkIfNumber(+numberOfVariable,true)){

				this.read('Вводите целое число больше нуля!');

			} else {

				this.numberOfVariable = numberOfVariable;
				this.numbers = [];

				for(var i = 0; i < numberOfVariable; i++){
					var newNumber = this.inputNumber('Введите число');
					if(newNumber == null){
						delete(this.numbers);
						break;
					} else {
						this.numbers.push(newNumber);
					}
				}

			}
		}

	},
	sum: function(){

		var sum = 0;

		this.numbers.forEach(function(el){
			sum += +el;
		});

		return sum;

	},
	mul: function(){

		var mul = 1;

		this.numbers.forEach(function(el){
			mul = mul * el;
		});

		return mul;

	},
	checkIfNumber: function(val,isInteger){

		var checkInteger = false;

		if(isInteger){
			checkInteger = !Number.isInteger(val);
		}

		if(isNaN(val) || val < 1 || checkInteger){
			return false;
		} else {
			return true;
		}

	},
	inputNumber: function(text){

		var i = 0;

		do {
			if(i > 0){
				text = 'Вводить можно только числа!';
			}
		    var number = prompt(text);
		    i++;
		} while(!this.checkIfNumber(+number,false) && number);

		return number;

	}
}

calculator.read('Сколько значений вводить?');

if(calculator.numbers){
	alert(calculator.sum());
	alert(calculator.mul());
}