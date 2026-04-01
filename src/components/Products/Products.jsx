import { Product } from "../Product/Product";

export function Products({product}) {
  return (
    <ul className="grid grid-cols-4 gap-[16px_12px]">
      {product.products.map((product) => <Product product={product} key={product.id}/>)}
    </ul>
  );
}