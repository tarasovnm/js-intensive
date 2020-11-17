import {EmailParser} from './lesson_02/EmailParser';
import {watchObj} from './lesson_02/watchObj';

// Урок №2 ДЗ-1
// const parser = new EmailParser('info@gmail.com');
// console.log(parser.name);
// console.log(parser.domain);
// console.log(parser.isCorrect);

// parser.email = 'some@nz';
// console.log(parser.name);
// console.log(parser.domain);
// console.log(parser.isCorrect);

// Урок №2 ДЗ-2
let div = document.createElement('div');
document.body.appendChild(div);

let cleverDiv = watchObj(div, function (prop, val) {
  console.log(prop, val);
});

cleverDiv.innerHTML = '<strong>HTML</strong><em>Charged</em>';
/*
  в консоли:
  innerHTML <strong>HTML</strong><em>Charged</em>
*/

cleverDiv.style.color = 'red';
/*
  весь текст стал красным
  в консоли:
  color red
*/

cleverDiv.querySelector('em').style.color = 'green';
/*
  em стал зеленым
  в консоли ничего не добавилось

  популярная ошибка Illegal invocation - из-за манипуляций у функции сломался this
*/