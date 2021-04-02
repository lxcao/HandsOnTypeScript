/*
 * @Author: clingxin
 * @Date: 2021-04-02 20:34:19
 * @LastEditTime: 2021-04-02 20:44:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Chap1/test-age.ts
 */

interface User {
    name: string;
    age: number;
}

function canDrive(usr: User) {
    console.log("user is", usr.name);

    if(usr.age >= 16) {
        console.log("allow to drive");
    } else {
        console.log("do not allow to drive");
    }
}

const tom: User = {
    name: "tom",
    age: 25
}

canDrive(tom);