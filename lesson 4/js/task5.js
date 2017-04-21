calculator(sqr,[1,2,3,4,5,6,7,8,9]);

function calculator(func,arr){

	for(var i = 0; i < arr.length; i++){
		console.log(arr[i] + ' - ' + func(arr[i]));
	}

}

function sqr(num){
	return num*num;
}