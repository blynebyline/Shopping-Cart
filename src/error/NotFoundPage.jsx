import { Link } from "react-router"

const NotFoundPage = () =>{
    return(
        <div className="min-h-screen flex flex-col justify-center items-center text-red-600">
            <h1 className="font-bold">No Page Found</h1>
            <Link to={"/"}>
                <button className="bg-black text-red-600 px-4 py-2 rounded hover:bg-gray-700">Go back Home</button>
            </Link>
            
        </div>
    )
}

export default NotFoundPage