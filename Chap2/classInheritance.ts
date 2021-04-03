/*
 * @Author: your name
 * @Date: 2021-04-03 19:58:03
 * @LastEditTime: 2021-04-03 20:14:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/classInheritance.ts
 */
class Vehicle {
    constructor(protected wheelCount: number) {}
    showNumberofWheels() {
        console.log('moved ${this.wheelCount} miles');
    }
}

class Motorcycle extends Vehicle {
    constructor() {super(2);}
    updateWheelCount(newWheelCount: number) {
        this.wheelCount = newWheelCount;
    }
}

class Automobile extends Vehicle {
    constructor() {super(4);}
}

const motorCycle = new Motorcycle();
motorCycle.updateWheelCount(1);
motorCycle.showNumberofWheels();

const autoMobile = new Automobile();
autoMobile.showNumberofWheels();