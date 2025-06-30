//유니온 타입


let str: 'name' | 'age' | 'adress' = 'name'

type CompanyA = {
    companyName: string;
    since: number;
}

const company1: CompanyA | {ceo:string} = {
    companyName : `8b-studio`,
    since: 2022,
    ceo: 'tiger'
}