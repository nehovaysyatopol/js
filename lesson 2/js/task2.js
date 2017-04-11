var message;
var login = '';

login == 'Вася' ? message = 'Привіт' :
login == 'Директор' ? message = 'Ласкаво просимо' :
login == '' ? message = 'Немає логіна' : message = '';

console.log(message);