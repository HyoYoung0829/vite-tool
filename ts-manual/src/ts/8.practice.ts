import { type Person } from "./type";


// 문제: Product 타입을 정의 후 union타입을 사용해 에러를 해결해주세요.
type Product = {
  id: string | number;
  name: string;
  price: number;
}

interface _Product {
  id: string | number;
  name: string;
  price: number;
}

const product1:_Product = {
  id: 'abc123',
  name: 'Laptop',
  price: 1000
};

const product2:_Product = {
  id: 123456,
  name: 'Smartphone',
  price: 500
};






// 문제: Contact타입을 정의 후 intersection을 사용하여 Employee를 만들어보세요.

interface Contact{
  email: string;
  phone: string;
}


type Employee = Person | Contact;

const employee1:Employee = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
  phone: '123-456-7890'
};




