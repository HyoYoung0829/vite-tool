

// number type
let num1:number = 10;
let num2:number = NaN;
let num3:number = -123;
let num4:number = 0.12345;
let num5:number = Infinity;

num1 = 100; // 에러 발생하지 않음


// string type
let str1 = 'hi'
let str2 = "hello"
let str3 = `hola ${num1}`


// boolean type
let bool1:boolean = true;
let bool2:boolean = false;


// null type
let nullA:null = null; // null타입을 직접 입력하는 경우는 많지는 않음.


// undefined type
let undef:undefined = undefined; // undefined타입을 직접 입력하는 경우는 많지는 않음.

// literal type
let numA:10 = 10; // 마치 const처럼 동작함. 무조건 10만 들어와야해. 11 놉!
let strA:'hello' = "hello";
let boolA:true = true;

//unknown type
let unknown:unknown; // 현재는 어떤 타입인지 모르지만 나중에 지정할겁니다.


//never type
let never:never; // 어떠한 값도 내보내지 않겠다. 단순 콘솔 함수나, 에러함수에 사용됨.

//any type
let any:any; // 타입을 지정하지 않으면 보통 any 타입이 됨.