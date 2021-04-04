/*
 * @Author: your name
 * @Date: 2021-04-04 18:52:23
 * @LastEditTime: 2021-04-04 19:01:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/arrowFunction.ts
 */
const myFunc = (message: string): void => console.log(message);

myFunc("hello");

const func = () => console.log("func");
const fun1 = () => ({name: "dave"});
const fun2 = () => {
    const val = 20;
    return val;
}

console.log(func());
console.log(fun1());
console.log(fun2());