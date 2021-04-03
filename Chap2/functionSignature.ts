/*
 * @Author: your name
 * @Date: 2021-04-03 18:56:25
 * @LastEditTime: 2021-04-03 18:59:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/functionSignature.ts
 */
type Run = (miles: number) => boolean;

let runner : Run = function (miles: number): boolean {
    if(miles > 10)
        return true;
    return false;
}

console.log(runner(9));