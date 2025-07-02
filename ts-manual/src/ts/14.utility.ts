//Omit<Type, Key> 생략

type User = {
    id:number;
    name:string;
    email: string;
}

type PublicUser = Omit<User,'email'>

const user:PublicUser = {
    id:1,
    name:'tiger'
}
/* ------------------------------------ - ----------------------------------- */

// Pick<T, K> 빼내기

const user2:Pick<User, 'id' | 'name'> = {
    id:2,
    name:'tiger'
}

/* ------------------------------------ - ----------------------------------- */

//Partial<T> 부분적 처리
// 모든 속성을 모두 옵셔널로 만들어버림.

type User3 = {
    id:number;
    name:string;
    email: string;
    adress:{
        lat:number;
        long:number;
    }
}

const user3:Partial<User3> = {
    id:2,
    name:'tiger'
}
/* ------------------------------------ - ----------------------------------- */

// Required<T> 한번에 모두 필수값 지정
/* ------------------------------------ - ----------------------------------- */

// Readonly<T> 모든거 한번에 리드온리로 지정
const user6:Readonly<User3> = {
    id:2,
    name:'tiger',
    email:"dfgsdgsdg",
    adress:{
        lat:30,
        long:30
    }
}
/* ------------------------------------ - ----------------------------------- */

// Record<K, V> k들로 구성된 객체를 만들고, 각 값은 V 타입으로 지정.

// type Role = 'admin' | 'user' | 'guest';
type Role = keyof typeof access;
type RollStatus = Record<Role, boolean>

const access = {
    admin:true,
    user:true,
    guest:false
}