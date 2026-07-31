import getData from "../api/FakeStoreApi";
import { useEffect, useState } from "react";

function useProducts(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData().then(data => {
            setProducts(data);
            setLoading(false);
        })
    }, [])

    return {products, loading}
}
    
export default useProducts