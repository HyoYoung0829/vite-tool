

let obj:any;

let arr : unknown;

arr = 1;
arr = 'hello';

if(typeof arr === 'number'){ // 성의 표시.. 이 조건문 안에서는 number가 됨.
    arr.toFixed()
}