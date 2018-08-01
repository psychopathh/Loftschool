/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var arr = [];

    for (var i = 0; i < array.length; i++) {
        arr.push(fn(array[i], i, array));
    }
    
    return arr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var result = initial;

    if (initial == undefined) {

        initial = array[0];
        result = initial;

        for (let i = 1; i < array.length; i++) {
            result = fn(result, array[i], i, array);
        }

        return result;
    }
    for (let i = 0; i < array.length; i++) {
        result = fn(result, array[i], i, array);
    }

    return result;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var arr = [];

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key.toUpperCase());
        }
    }

    return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
    let arr = [];

    let begin = from;
    let end = to;

    if (to < 0) {
        end = array.length + to;
    }
    if (to > array.length) {
        end = array.length;
    }
    if (from < 0) {
        begin = array.length + from;
    }

    for (let i = 0; i <= end - 1; i++) {
        if (i >= begin) {
            arr.push(array[i]);
        }
    }

    return arr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set(target, prop, value) {
            return target[prop] = value * value;
        }
    })
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
