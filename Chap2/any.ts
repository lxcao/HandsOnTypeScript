/*
 * @Author: your name
 * @Date: 2021-04-03 14:50:54
 * @LastEditTime: 2021-04-03 14:53:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/any.ts
 */
let val: any = 22;
val = "string value";
val = new Array();
//val.push(33);
val.doesnotexit(33);
console.log(val);