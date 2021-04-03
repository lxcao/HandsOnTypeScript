/*
 * @Author: your name
 * @Date: 2021-04-03 21:37:07
 * @LastEditTime: 2021-04-03 21:45:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/functionGeneric.ts
 */
interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(arg: T): number {
    if(arg.hasOwnProperty("length")) 
        return arg["length"];
    return 0;
}

//console.log(getLength<number>(22));
console.log(getLength("Hello world."));