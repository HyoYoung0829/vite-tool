
import type {UserData} from './type';

type User = {name:string, age:number}

type Options = {
    timeout:number,
    data:User[],
    condition:boolean
}

const defaultOptions = {
    timeout:1000,
    data:[{name:'tiger', age:30}],
    condition:false
}


function delayP(options:Partial<Options>):Promise<User[]>{

    const {timeout, data, condition} = {...defaultOptions, ...options} // 객체 합성.

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(condition) resolve(data);
            else reject({message: 'error!'})
        }, timeout)
    })
}

delayP({
    timeout:1000,
    data:[{name:'tiger', age:30}],
    condition:false
})







async function fetchUserData(url:string):Promise<UserData>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

fetchUserData('https://jsonplaceholder.typicode.com/users')