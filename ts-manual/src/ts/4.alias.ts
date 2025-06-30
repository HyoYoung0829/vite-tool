

//alias : 별칭

type User1 = {
    id:number;
    name:string;
    auth:string;
    isPaid:boolean;
}

type User2 = User1 & {address:string}; // 기존 User1의 타입과 adress 속성을 추가한 새로운 타입. 조금 더 확장 하고 싶을때 사용.

const user1:User1 = {
    id: 1,
    name: 'tiger',
    auth:'admin',
    isPaid:true,
}

const user2:User1 & {address:string} = { // 이렇게 바로 확장도 가능하긴 함. 
    id: 2,
    name: 'beom',
    auth: 'user',
    isPaid : false,
    address: "남양주시",
}

interface User3 {
    id: number;
    name: string;
    auth: string;
    isPaid: boolean;
}

// interface User3 { // 인터페이스는 여러번 정의할 수 있는데 알아서 병합이 됨. 근데 뭔가 하면 안될거 같죠? ㅋㅋ
//     address:string
// }

interface User4 extends User3{
    address:string;
}

const user3:User4 = {
    id: 3,
    name: 'sun',
    auth:'user',
    isPaid:true,
    address: "아산시",
}


// 객체의 키가 동적으로 결정될 때 유용하게 사용할 수 있는
// index signature
type Person = {
    name: string;
    age: number;
    email: string;
    [key:string]:string | number;
}

const person:Person = {
    name : 'tiger',
    age : 30,
    email:'tiger@gamil.com',
    gender: 'male'
}