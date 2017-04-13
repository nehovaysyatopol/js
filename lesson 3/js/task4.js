var li = document.querySelectorAll('li');

for(var i = 0; i < li.length; i++){
	console.log(li[i].firstChild.nodeValue.trim(), li[i].querySelectorAll('li').length);
}