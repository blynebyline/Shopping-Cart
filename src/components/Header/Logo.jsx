import myLogo from '../../assets/logoBlack.png'
import cartIcon from '../../assets/icons/cart.png';
import homeIcon from '../../assets/icons/home.png';
import shopIcon from '../../assets/icons/shop.png';


const Logo = () => {
    return (
        <img src={myLogo} alt="Hexternal Logo" className=' w-16'></img>
    )
}

export function HomeIcon(){
    return (
        <img src={homeIcon} alt="Home Icon" className='w-icon'></img>
    )
}

export function CartIcon(){
    return (
        <img src={cartIcon} alt="Cart Icon" className='w-icon'></img>
    )
}

export function ShopIcon(){
    return (
        <img src={shopIcon} alt="Home Icon" className='w-icon'></img>
    )
}

export default Logo