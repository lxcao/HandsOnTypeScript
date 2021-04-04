/*
 * @Author: your name
 * @Date: 2021-04-04 19:48:21
 * @LastEditTime: 2021-04-04 19:54:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/destructuring.ts
 */
function getEmployee(id) {
    return {
        name: 'John',
        age: 35,
        address: '123 St',
        country: 'United States'
    }
}

const {name: fullName, age} = getEmployee(22);
console.log('employee', fullName, age);

function getEmployeeWorkInfo (id) {
    return [id, 'Office St', 'France']
}

const [id, officeAddress] = getEmployeeWorkInfo(33);
console.log('employee', id, officeAddress);