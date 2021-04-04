/*
 * @Author: your name
 * @Date: 2021-04-04 19:27:23
 * @LastEditTime: 2021-04-04 19:29:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/spreadObj.ts
 */
namespace NameSpaceA {
    class A {
        aname : string = "A";
    }
    class B {
        bname: string = "B";
    }
    const a = new A();
    const b = new B();
    const c = {...a, ...b};
    const d = Object.assign(a,b);
    console.log(c);
    console.log(d);
    a.aname = "a1";
    console.log(c);
    console.log(d);
}