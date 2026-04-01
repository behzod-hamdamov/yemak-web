export function ProductsList({products}) {
  return (
    <div className="flex flex-col gap-6">
      {products.data.products.map((product) => (
        <div className="flex flex-col gap-4" key={product.id}>
          <h2
            key={product.id}
            className="leading-7.5 text-2xl font-semibold text-[#12282F]"
          >
            {product.title}
          </h2>
        </div>
      ))}
    </div>
  );
}
