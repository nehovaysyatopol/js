var salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250,
	"Коля": 300,
	"Нина": 100,
	"Валя": 300,
	"Поля": 250,
	"Саша": 300
};

var max = 0;
var names = ['немає працівника'];

for(var key in salaries){
	if(max === salaries[key]){
		names.push(key);
	} else if(max < salaries[key]){
		while(names.length > 0){
		    names.pop();
		}
		max = salaries[key];
		names.push(key);
	}
}

console.log(names);