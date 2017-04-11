export interface Product {
  id:number;
  name:string;
  prize:number;
}

export function productFactory(id, name, prize) {
  return <Product> {
    id: id,
    name: name,
    prize: prize
  }
}
