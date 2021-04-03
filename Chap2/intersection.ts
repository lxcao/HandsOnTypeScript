/*
 * @Author: your name
 * @Date: 2021-04-03 14:59:09
 * @LastEditTime: 2021-04-03 15:00:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/intersection.ts
 */
let obj: {name: string} & {age: number} = {
    name: 'tom',
    age: 25
}
console.log(obj);