export class Product {
  id:number;
  name:string;
  prize:number;
  onStore:number;
}

export function productFactory(id:number, name:string, prize:number = 0, onStore:number = 0) {
  return <Product> {
    id: id,
    name: name,
    prize: prize,
    onStore: onStore
  }
}
