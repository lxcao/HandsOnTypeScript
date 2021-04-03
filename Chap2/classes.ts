/*
 * @Author: your name
 * @Date: 2021-04-03 19:04:52
 * @LastEditTime: 2021-04-03 19:10:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/classes.ts
 */
class Person1 {
    constructor(private readonly msg: string){}
    //msg: string;
    speak(){
        //this.msg = "speak" + this.msg;
        console.log(this.msg);
    }
}

const tom1 = new Person1("hello");
//tom1.msg = "hello";
tom1.speak();
