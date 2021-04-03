/*
 * @Author: your name
 * @Date: 2021-04-03 14:55:29
 * @LastEditTime: 2021-04-03 14:57:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/unknown.ts
 */
let val1: unknown = 22;
val1 = "string value";
val1 = new Array();
if(val1 instanceof Array)
    val1.push(33);
console.log(val1);