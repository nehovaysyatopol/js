console.log(checkAge(14));

function checkAge(age){
	//return age > 18 ? true : confirm('Родители разрешили?');
	return age > 18 || confirm('Родители разрешили?');
}