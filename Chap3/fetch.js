var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
 * @Author: your name
 * @Date: 2021-04-04 21:20:30
 * @LastEditTime: 2021-04-04 21:24:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/fetch.ts
 */
import fetch from 'node-fetch';
(function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://pokeapi.co/api/v2/pokemon/ditto/');
        if (response.ok) {
            const result = yield response.json();
            console.log(result);
        }
        else {
            console.log('Failed to get anything');
        }
    });
})();
