/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator
 * 语法: arguments[@@iterator]()
 * @@iterator 属性的初始值是和 Array.prototype.values 属性的初始值相同的对象。
 * 知识点:
 * (1)iterator 迭代器
 * (2)for...of 循环
 * (3)Symbol: 
 * -- ES6中一种新的原始数据类型，可用来创建匿名的对象属性，
 * 常用作对象键值；for..in会忽略对象的symbol属性。
 * --
 */

let id = new Symbol('id');
console.log(typeof id);
//for...of循环的迭代
function f() {
    for (let letter of arguments) {
        console.log(letter);
    }

    var iterator = arguments[Symbol.iterator]();
    console.log(iterator.next().value);

}

f(1, 2, 3, 4, 'a', 'b');

