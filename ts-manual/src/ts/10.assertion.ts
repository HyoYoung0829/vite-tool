
const input = document.querySelector('#textField') as HTMLInputElement;

input.value


const personA:{
    readonly name : string;
    readonly age: number;
} = {
    name:'tiger',
    age: 30
}


const personB = {
    name:'tiger',
    age: 30
} as const // readonly가 되어버림 ㄷㄷ

// personB.name = 'seonbeom'