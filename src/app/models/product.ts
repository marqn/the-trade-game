export interface Product {
  id:number;
  name:string;
  prize:number;
}

export function productFactory(id:number, name:string, prize:number = 0) {
  return <Product> {
    id: id,
    name: name,
    prize: prize
  }
}
