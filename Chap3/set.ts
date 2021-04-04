/*
 * @Author: your name
 * @Date: 2021-04-04 20:55:04
 * @LastEditTime: 2021-04-04 20:59:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/set.ts
 */
const userIds = [1,2,1,3]
const uniqueIds = new Set(userIds);
console.log(uniqueIds);
uniqueIds.add(10);
console.log(uniqueIds);
console.log('has', uniqueIds.has(3));
console.log('size', uniqueIds.size);
for(let item of uniqueIds) {
    console.log('iterate', item);
}

uniqueIds.forEach(item => console.log(item));

