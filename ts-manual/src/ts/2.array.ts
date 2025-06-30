let arr:number[] = [1,2,3];

let str = 'a,b,c'.split(',');



// generic type 변수
let _arr: Array<number> = [1, 2, 3]; //나중에 중요해짐


// 유니온 타입 + array 타입
let multi: (string | number | boolean)[] = ['hello', 10, true];


// 튜플 타입
let tupleA:[number, number, number] = [1,2,3];
//tupleA = [10, 100]

let tupleB:[string,number] = ['tiger', 30]; // 요소 수도 일치, 타입도 일치, 순서도 일치 해야만 함.
// tupleB = [`age`, 30]


// 다차원 배열
const user:[string, number][] = [
    ['백효영', 26],
    ['백효영', 26],
    ['백효영', 26],
]
