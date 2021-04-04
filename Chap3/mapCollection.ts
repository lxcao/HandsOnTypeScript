/*
 * @Author: your name
 * @Date: 2021-04-04 21:00:21
 * @LastEditTime: 2021-04-04 21:03:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/mapCollection.ts
 */
const mappedEmp = new Map();
mappedEmp.set('linda', {fullName: 'Linda Johon', id: 1});
mappedEmp.set('jim', {fullName: 'Jim Johon', id: 2});
mappedEmp.set('pam', {fullName: 'Pam Johon', id: 4});

console.log(mappedEmp);
console.log(mappedEmp.get('jim'));
console.log(mappedEmp.size);

mappedEmp.forEach((fname, content) => console.log(fname, content))