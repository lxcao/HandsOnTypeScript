/*
 * @Author: your name
 * @Date: 2021-04-03 15:04:02
 * @LastEditTime: 2021-04-03 15:05:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/union.ts
 */
let unionObj: null | {name: string} = null;
console.log(unionObj);
unionObj = {name: 'jon'};
console.log(unionObj);