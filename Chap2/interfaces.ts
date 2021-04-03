/*
 * @Author: your name
 * @Date: 2021-04-03 19:27:11
 * @LastEditTime: 2021-04-03 19:50:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /HandsOnTypeScript/Chap2/interfaces.ts
 */
interface Employee {
    name: string;
    id: number;
    isManager: boolean;
    getUniqueId: () => string;
}

const linda1: Employee = {
    name: "linda",
    id: 2,
    isManager: false,
    getUniqueId: (): string => {
        let uniqueId = linda1.id + "_" + linda1.name;
        if(!linda1.isManager)
            return "emp-" + uniqueId;
        return uniqueId;
        }
}

console.log(linda1.getUniqueId());

const pam: Employee = {
    name: "pam",
    id: 1,
    isManager: true,
    getUniqueId: (): string => {
        let uniqueId = pam.id + "-" + pam.name;
        if(pam.isManager)
            return "mgr-" + uniqueId;
        return uniqueId;
    }
}

console.log(pam.getUniqueId());