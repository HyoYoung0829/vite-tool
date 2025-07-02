
import type {Poke} from './type';

const END_POINT = 'https://pokeapi.co/api/v2/pokemon/3';


async function fetchData(url:string):Promise<Poke> {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

fetchData(END_POINT)
//fetchData 함수를 만들고 타입을 지정해주세요.






function createCard({sprites, name}:Pick<Poke, 'sprites' | "name">):string{
    const tag = `
        <div class="card">
            <img src="${sprites['front_default']} alt="${name}" />
            <h2>${name}</h2>
        </div>
    `
    return tag
}

function render(target:HTMLElement | null, data:Poke):void{

    // if(target){
    //     target.insertAdjacentHTML('beforeend', createCard(data))
    // }

    target?.insertAdjacentHTML('beforeend', createCard(data)) // 옵셔널 체이닝
}


function fetchPokemon(){
    const arr:Promise<Poke>[] = [];
    Array(10).fill(null).forEach((_, i) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`
        arr.push(fetch(url).then((res)=>res.json())) // 패치에서 프로미스 돌린 포켓몬 데이타 나옴. :프로미스임.
    })

    return arr
}

function createPokemonObject(arr:Promise<Poke>[]){
    let pokemon:unknown;

    Promise.all(arr).then((all) => { // 프로미스가 담긴 배열을 넣으면 알아서 순환해서 다 열어버림. ㄷㄷ 그리고 then으로 받을 수 있음. 성공적으로 끝난 데이터 배열을 반환홤.
        pokemon = all.map((p) => {
            return {
                name: p.name,
                image: p.sprites['front_default']
            }
        })
    }) 
    return pokemon; //[{name:"", image:""}, {name:"", image:""},{name:"", image:""},...]
}