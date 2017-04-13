console.log(document.head);



console.log(document.querySelector('ul'));
// или
//console.log(document.getElementsByTagName('ul')[0]);



console.log(document.querySelectorAll('li')[1]);
// или
//console.log(document.getElementsByTagName('li')[1]);



var newLi = document.createElement('li');
newLi.innerHTML = 'Синий';
document.querySelector('ul').appendChild(newLi);
// или
//document.querySelector('ul').innerHTML += '<li>Синий</li>';



var list = document.querySelectorAll('li');

for(var i = 0; i < list.length; i++){

	var listItem = list[i];
	var color = '';

	switch(listItem.innerHTML){
		case 'Жовтий':
			color = 'yellow';
		break;
		case 'Зелений':
			color = 'green';
		break;
		case 'Синий':
			color = 'blue';
		break;
	}

	listItem.classList.add(color);
	listItem.style.color = color;

}