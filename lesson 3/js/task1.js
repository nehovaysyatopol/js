var styles = ['Джаз', 'Блюз'];

console.log(styles);



styles.push('Рок-н-ролл');

console.log(styles);



styles.splice(-2, 1, 'Класика');

console.log(styles);



alert(styles.shift());

console.log(styles);



styles.unshift('Реп', 'Реггі');

console.log(styles)