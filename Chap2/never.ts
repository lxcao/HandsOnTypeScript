/*
 * @Author: your name
 * @Date: 2021-04-03 19:00:48
 * @LastEditTime: 2021-04-03 19:03:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/never.ts
 */
function oldEnough(age: number): never | boolean {
    if(age > 59)
        throw Error("Too old!");
    if(age <= 18)
        return false;
    return true;
}

console.log(oldEnough(60));