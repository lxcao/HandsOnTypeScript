/*
 * @Author: your name
 * @Date: 2021-04-04 21:20:30
 * @LastEditTime: 2021-04-04 21:24:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/fetch.ts
 */
import fetch from 'node-fetch';
(async function getData() {
    const response = await fetch('http://pokeapi.co/api/v2/pokemon/ditto/');
    if(response.ok){
        const result = await response.json();
        console.log(result);
    }else {
        console.log('Failed to get anything');
    }
})();