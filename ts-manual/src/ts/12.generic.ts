// 타입 스크립트의 핵심.. 
// 타입에 별칭을 쓰기위해. => 함수의 재사용성을 높이기 위해.

type User<yaho, oing> = {name:yaho; age:oing}

const user:User<string, number> = {
    name : 'tiger',
    age : 30
}

function fn<T>(value:T):T{ // T가 10의 타입인 number를 받았고 , T에 전부 number를 넣어준다.
    return value;
}

fn(10)
fn('hello')
fn([])
fn({})


function swapAtoB<T, U>(a:T, b:U):(T | U)[]{
    return [b, a]
}

swapAtoB(0, 'a');


function getLength<T extends {length:number}> (arr:T):number{ // 제네릭을 받긴할건데 lenght는 가지고 있다~? 알아둬~~
    return arr.length;
}

getLength([1,2,3,])
getLength(["1","2","3"])


