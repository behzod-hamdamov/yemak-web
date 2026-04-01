export function Product({ product }) {
  return (
    <li className="bg-white rounded-2xl overflow-hidden cursor-pointer">
      <img
        src={product.photo}
        alt="product"
        className="min-h-43 object-cover"
      />
      <div className="pt-2 pb-3 p-[0_12px]">
        <h5 className="leading-4.5 text-sm font-semibold pb-1">
          {product.name}
        </h5>
        <div className="flex flex-col min-h-9.5 justify-end">
          {product.price !== product.price_original && (
            <span className="leading-3.75 text-xs font-normal text-[#FF5A5A] line-through">
              {product.price_original}
            </span>
          )}
          <h5 className="leading-5.5 text-lg font-bold">{product.price}</h5>
        </div>
      </div>
    </li>
  );
}
