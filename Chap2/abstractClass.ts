/*
 * @Author: your name
 * @Date: 2021-04-03 20:08:42
 * @LastEditTime: 2021-04-03 20:16:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/abstractClass.ts
 */
namespace AbstractNamespace {
    abstract class Vehicle {
        constructor(protected wheelCount: number) {}
        abstract updateWheelCount(newWheelCount: number): void;
        showNumberOfWheels() {
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
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
        }
    }
    
    const motorCycle = new Motorcycle();
    motorCycle.updateWheelCount(1);
    motorCycle.showNumberOfWheels();
    
    const autoMobile = new Automobile();
    autoMobile.showNumberOfWheels();
}