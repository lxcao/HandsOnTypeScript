/*
 * @Author: your name
 * @Date: 2021-04-03 15:13:26
 * @LastEditTime: 2021-04-03 15:18:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/literal.ts
 */
let literal: "tom" | "linda" | "jeff" | "sue" = "linda";
literal = "jeff";
console.log(literal);

type ComplexPerson = {
    name: string,
    age: number,
    birthday: Date,
    married: boolean,
    address: string
}