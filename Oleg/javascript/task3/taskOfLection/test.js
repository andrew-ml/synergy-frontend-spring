
let word = prompt('Какое слово хотите перевести: head, body, header?');

switch (word) {
    case 'head':
        alert('Голова');
        break;
    case 'body':
        alert('Тело');
        break;
    case 'header':
        alert('Заголовок');
        break;
    default: alert('Вы ввели не верное слово');
};

// let yourAge = prompt('Введите Ваш возраст');

// switch (yourAge) {
//     case '1':
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//     case '6':
//     case '7':
//     case '8':
//     case '9':
//     case '10':
//     case '11':
//     case '12':
//     case '13':
//         alert('Ребенок');
//         break;
//     case '14':
//     case '15':
//     case '16':
//     case '17':
//         alert('Подросток');
//         break;
//     case '18':
//     case "20":
//     case "21":
//     case "22":
//     case "23":
//     case "24":
//     case "25":
//         alert('Взрослый');
//         break;
//     default:
//         alert('Не верный формат ввода');
// };


let yourAge = prompt('Введите Ваш возраст');

if (yourAge < 13) {
    alert('Ребенок');
} else if (yourAge > 13 && yourAge < 18) {
    alert('Подросток');
} else if (yourAge >= 18 && yourAge < 150) {
    alert('Взрослый');
} else if (yourAge < 0 || yourAge > 150) {
    alert('Какой странный возраст, Вам правда столько лет?')
} else {
    alert('Неверный формат ввода');
};
