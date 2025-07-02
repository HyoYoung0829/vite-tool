 const user = {
    name:'tiger',
    age : 30,
    gender: 'male',
    address: '남양주시'
 }

 type User = typeof user; // 이 친구의 타입을 찾아서 타입으로 만들어버림 ㄷㄷ

 if(typeof user === 'string'){ // 이건 비교 타입오브js, 위에는 타입 뽑아내는 타입오브ts

 }


 type UserKey = keyof User



 const settings={
    theme:'dark',
    fontSize:16,
    language: 'ko'
 }

 type SettingsKey = keyof typeof settings