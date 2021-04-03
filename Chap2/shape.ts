/*
 * @Author: clingxin
 * @Date: 2021-04-03 14:44:25
 * @LastEditTime: 2021-04-03 14:45:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/shape.ts
 */
class Person {
    name: string;
}

const jill: {name: string} = {
    name: "jill"
};
const person: Person = jill;
console.log(person)