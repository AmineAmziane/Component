import React,{useState} from 'react'
import Logo from '../images/logo.svg'
import Avatar from '../images/image-avatar.png'
import Image from  '../images/image-product-1.jpg'
import './index.scss'


const Navbar = (props) =>{
    const [Toggle,setToggle] = useState(false);
    return (
        <div className='navbar'>
            <div className='brand-logo'>
                <div className='menu' onClick={()=>{setToggle(true)}}>
                    <i className="ri-menu-line ri-2x"></i>
                </div>
                <img src={Logo} alt="logo" />
            </div>
            <nav className={Toggle ? 'appear' : ''}>
                <div className='close' onClick={()=>{setToggle(false)}}>
                    <i className="ri-close-line"></i>
                </div>
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className='avatar'>
                <div className='cart'>
                    <i className="ri-shopping-cart-2-line icon"></i>
                    <span className='size'>{props.count}</span>
                    <div className='shopping-cart'>
                        {props.count ? <><p className='pcart'>Cart</p>
                        <div className='container'>
                            <div className='row'>
                                <img src={Image} alt="" />
                                <div className='name'>
                                    <p>Fall Limited Edition Sneakers</p>
                                    <p>$125.00 x {props.count}<span> ${(props.count * 125)}.00</span></p>
                                </div>
                                <i className="ri-delete-bin-6-fill" onClick={()=>{props.setCount(0)}}></i>
                            </div>
                            <button>Checkout</button>
                        </div></>: <><h6>Your cart is empty.</h6></>}
                    </div>
                </div>
                <img src={Avatar} alt="" className='avatar'/>
            </div>
        </div>
    )
}

export default Navbar;