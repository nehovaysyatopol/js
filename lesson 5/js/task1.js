var user = {};

user.name = 'Вася';
user.surename = 'Пупкин';

console.log(user);

user.name = 'Сергій';

console.log(user);

delete(user.name);

console.log(user);