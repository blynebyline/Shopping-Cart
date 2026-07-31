import useCart from "../../hooks/useCart"

const CartPage = () => {
    const { cart } = useCart();

    return (
        <div className="min-h-screen">
            <h2 className="m-4 text-center sm:text-left">Shopping Cart</h2>
            <hr></hr>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(550px,1fr))] gap-4 p-4">
                {cart.map(item => (
                    <div key={item.id} className="flex flex-col items-center sm:flex-row border-2 m-4">
                        <img src={item.image} alt={item.title} className="m-4 p-4 w-[130px] border-2" />
                        <div className="flex flex-col items-center justify-center">
                            <h4 className="text-center">{item.title}</h4>
                            <h4 className="text-orange-500">Items: {item.quantity}</h4>
                            <h4 className="text-red-500">Total ${item.price * item.quantity}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartPage