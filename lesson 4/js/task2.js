pow(2,5);

function pow(x,n){

	//console.log(Math.pow(x,n));

	//или

	var result = x;
	var i = 1;

	while(i < n){
		result = result * x;
		i++;
	}

	console.log(result);

}