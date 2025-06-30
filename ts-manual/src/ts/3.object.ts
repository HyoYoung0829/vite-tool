

const user:{
    id ?: number; //  옵셔널. 넣어도 그만, 안넣어도 그만.
    name : string;
    age : number;
} = {
    name : 'tiger',
    age: 30
}

// 읽기 전용. 값  변경 불가. 
const config: {
    readonly apiKey:string
} = {
    apiKey:'laksjdglkasjdlgk'
}

