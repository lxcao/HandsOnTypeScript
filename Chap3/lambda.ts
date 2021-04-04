/*
 * @Author: your name
 * @Date: 2021-04-04 19:58:24
 * @LastEditTime: 2021-04-04 20:45:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/find.ts
 */
const items = [
    {name: 'jon', age: 20},
    {name: 'linda', age: 22},
    {name: 'jon', age: 40}
]

const jon = items.find(item => item.name === 'jon');

console.log(jon);

const results = items.filter((item, index) => item.name === 'jon');

console.log(results);

const elements = items.map((item, index) =>  '<div>${item.name} - ${item.age}</div>');

console.log(elements);

const allTrucks = [2,5,7,10];
const initialCapacity = 0;
const allTonnage = allTrucks.reduce((totalCapacity, currentCapacity) => {
    totalCapacity = totalCapacity + currentCapacity;
    return totalCapacity;
}, initialCapacity);

console.log(allTonnage);

const widgets = [
    {id:1, color: 'blue'},
    {id:2, color: 'yellow'},
    {id:3, color: 'red'},
    {id:4, color: 'green'},
]

console.log('some blue', widgets.some(item => item.color==='blue'));
console.log('everyone is blue', widgets.every(item => item.color === 'blue'));
