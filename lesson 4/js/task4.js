createList('green', ['hello', 'world']);

function createList(color,arr){

	var list = document.getElementsByTagName('ul')[0];

	for(var i = 0; i < arr.length; i++){
		list.innerHTML += '<li style="color: ' + color + '">' + arr[i] + '</li>';
	}

}
