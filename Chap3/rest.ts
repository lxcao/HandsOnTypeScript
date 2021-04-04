/*
 * @Author: your name
 * @Date: 2021-04-04 19:56:14
 * @LastEditTime: 2021-04-04 19:57:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/rest.ts
 */
function doSomething(a, ...others) {
    console.log(a,others, others[others.length -1]);
}

doSomething(1,2,3,4,5,6,7);