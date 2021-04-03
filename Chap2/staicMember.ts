/*
 * @Author: your name
 * @Date: 2021-04-03 19:19:21
 * @LastEditTime: 2021-04-03 19:24:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/staicMember.ts
 */
class ClassA {
    static typeName: string;
    constructor(){}
    static getFullName() {
        return "ClassA " + ClassA.typeName;
    }
}

const a1 = new ClassA;
console.log(ClassA.getFullName());
//console.log(a1.typeName);