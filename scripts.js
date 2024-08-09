/*Дата и время. Математические ф-ции. Работа со строками. Регулярные выражения.*/

/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.*/

{
    let string = 'aaa@bbb@ccc';
    console.log(string.replace(/@/g, '!'));
}

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.*/

{
    let date = '2025-12-31';
    let dateNew = date.split('-');
    console.log(dateNew[2] + '/' + dateNew[1] + '/' + dateNew[0]);
}

/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).*/

{
    let str = '«Я учу javascript!»';

    console.log(str.substr(2, 4));
    console.log(str.substr(6, 11));

    console.log(str.substring(2, 6));
    console.log(str.substring(7, 17));

    console.log(str.slice(2, 6));
    console.log(str.slice(7, 17));
}

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

{
    let arr = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }
    console.log(Math.sqrt(sum));
}

/*5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.*/

{
    let a = 3;
    let b = 5;
    let c = a - b;

    console.log(Math.abs(c));
}

/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).*/


{
    function dateHours(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    let date = new Date();
    let dateNow = dateHours(date.getDate() + '.' + dateHours(date.getMonth() + 1) + '.' + date.getFullYear());
    let numbers = dateHours(date.getHours()) + ':' + dateHours(date.getMinutes()) + ':' + dateHours(date.getSeconds());

    console.log(numbers + ' ' + dateNow);

}

/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.*/

{
    let str = 'aa aba abba abbba abca abea';
    let regexp = /a(b+)a/g;

    console.log(str.match(regexp));

}
