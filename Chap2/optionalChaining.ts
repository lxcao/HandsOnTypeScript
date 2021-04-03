/*
 * @Author: your name
 * @Date: 2021-04-03 21:45:58
 * @LastEditTime: 2021-04-03 21:53:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/optionalChaining.ts
 */
namespace OptionalChainingNS {
    interface Wheels {
        count?: number;
    }
    interface Vehicle {
        wheels?: Wheels;
    }
    class Automobile implements Vehicle {
        constructor(public wheels?: Wheels) {}
    }
    const car:Automobile | null = new Automobile({count: undefined});
    console.log("car", car);
    console.log("wheels ", car?.wheels);
    console.log("count ", car?.wheels.count);

    const val1 = undefined;
    const val2 = 10;
    const result = val1 ?? val2;
    console.log(result);
}