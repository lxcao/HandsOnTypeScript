/*
 * @Author: your name
 * @Date: 2021-04-04 19:14:06
 * @LastEditTime: 2021-04-04 19:16:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/bind.ts
 */
class A {
    name: string = "A";
    go() {
        console.log(this.name);
    }
}

class B {
    name: string = "B";
    go() {
        console.log(this.name);
    }
}

const a = new A();
a.go();
const b = new B();
b.go = b.go.bind(a);
b.go();