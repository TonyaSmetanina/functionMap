// Напиши функцію map(fn, array),
// яка приймає на вхід функцію та масив,
// та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.

const array = [6,7,8];
function map(fn, array){
const result = new Array();
for (let i = 0; i < array.length; i++) {
result.push(fn(array[i]));
};
return result;

};

function hyi (el) {
return el+1;
}

console.log(map(hyi,array));