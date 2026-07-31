import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts"

const ShoppingPage = () => {
    const { products, loading } = useProducts();
    const { addToCart } = useCart();

    if (loading) return <p className="min-h-screen flex justify-center items-center">Loading...</p>
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 p-4">
            {products.map(product => (
                <div key={product.id} className="h-full border-2 border-black rounded-md p-4 flex flex-col items-center">
                    <img src={product.image} alt={product.title} className="h-40"></img> 
                    <h3 className="line-clamp-2 text-center">{product.title}</h3>
                    <p>$ {product.price}</p>
                    <p>Rating: {product.rating.rate} ({product.rating.count} views)</p>
                    <button onClick={() => addToCart(product)} className="mt-auto bg-black text-white px-4 py-2 rounded cursor-pointer">Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default ShoppingPage