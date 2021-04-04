/*
 * @Author: your name
 * @Date: 2021-04-04 21:06:19
 * @LastEditTime: 2021-04-04 21:11:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap3/callback.ts
 */
function letMeKnowWhenComplete(size, callback) {
    var reducer =0;
    for(var i = 1; i< size; i++) {
        reducer = Math.sin(reducer *i);
    }
    callback();
}

letMeKnowWhenComplete(1000000, function() {console.log('Great it complete')});