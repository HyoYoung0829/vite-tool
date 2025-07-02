


const arr = [1,2,3];

const newArray = arr.map((item, index) => {
    return item * index;
})


type Map = <T, U>(arr:T[], f:(a:T) => U) => U[];

const map:Map = (arr,f) => {
    let result = [];

    for(const a of arr){
        result.push(f(a))
    }

    return result;
}

// type Callback<T> = (a:T, i:number) => void
// type ForEach = <T>(arr:T[], f:Callback<T>) => void ;

// const forEach:ForEach = (arr, f) => {
//     let i = 0;
//     for(const a of arr){
//         f(a,i++)
//     }
// }


const forEach = <T>(arr:T[], f:(a:T, i:number) => void ) => {
    let i = 0;
    for(const a of arr){
        f(a,i++)
    }
}


interface _Callback<T> {(a:T, i:number) : boolean}
type Filter = <T>(arr:T[], f:_Callback<T>) => void;

const filter:Filter = (arr, f) => {
    const result = [];
    let i = 0;
    for(const a of arr){
        if(f(a, i++)) result.push(a)
    }
    return result;
}

type __Callback<T,U> = (acc:U, cur:T, i:number) => U
type Reduce = <T,U>(arr:T[],f:__Callback<T,U>,init:U) => U

const reduce:Reduce = (arr, f, init) => {
    let acc = init;
    let i = 0;
    for(const a of arr){
        acc = f(acc,a,i++);
    }
    return acc;
}

// reduce(arr, (a) => a * 2, 0)