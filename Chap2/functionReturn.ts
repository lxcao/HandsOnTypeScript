/*
 * @Author: your name
 * @Date: 2021-04-03 18:51:29
 * @LastEditTime: 2021-04-03 18:55:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/functionReturn.ts
 */
function runMore(distance: number): number {
    return distance + 10;
}

function eat(calories: number) {
    console.log("i ate " + calories + " calories");
}

function sleepIn(hours: number): void {
    console.log("i slept " + hours + " hours");
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);
