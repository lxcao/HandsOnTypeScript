/*
 * @Author: your name
 * @Date: 2021-04-04 18:50:35
 * @LastEditTime: 2021-04-04 18:52:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/testThis.ts
 */
function MyFunction () {
    console.log(this);
}

MyFunction();
let test = new MyFunction();