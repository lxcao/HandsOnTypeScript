/*
 * @Author: your name
 * @Date: 2021-04-04 19:18:54
 * @LastEditTime: 2021-04-04 19:25:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/call.ts
 */
const callerObj = {
    name: 'jon'
}

function checkMyThis(age) {
    console.log("What is the ${this}");
    console.log("Do I have a name? ${this.name}");
    this.age = age
    console.log("What is my age ? ${this.age}")
}

checkMyThis.call(callerObj, 25)