import React,{useState} from 'react'
import Logo from '../images/logo.svg'
import ImageP from '../images/image-product-1.jpg'
import Image1 from '../images/image-product-1.jpg'
import Image2 from '../images/image-product-2.jpg'
import Image3 from '../images/image-product-3.jpg'
import Image4 from '../images/image-product-4.jpg'
import Product_1 from '../images/image-product-1-thumbnail.jpg'
import Product_2 from '../images/image-product-2-thumbnail.jpg'
import Product_3 from '../images/image-product-3-thumbnail.jpg'
import Product_4 from '../images/image-product-4-thumbnail.jpg'
import './index.scss'

const Pictures = () =>{
    const BigImgs = [Image1,Image2,Image3,Image4];
    const [show,setShow] = useState(false);
    const [Item,setItem] = useState(0);
    function ShowEffect(iter){
        let images = document.querySelectorAll('.ig img');
        let imagesInner = document.querySelectorAll('.inner-images img');
        for(let i=0;i<images.length;i++){
            images[i].classList.remove('selected');
            imagesInner[i].classList.remove('selectedT'); 
        }
        images[iter].classList.add('selected');
        imagesInner[iter].classList.add('selectedT');
    }
    return(
        <div className='images'>
            <img src={BigImgs[Item]} alt="" className='selected' onClick={
                ()=>{
                    document.querySelector('.disappear').classList.add('gallery');
                }
            }/>
            <div className='inner-images'>
                <img src={Product_1} alt="" onClick = {() =>{setItem(0);ShowEffect(0)}} className='selectedT'/>
                <img src={Product_2} alt="" onClick = {() =>{setItem(1);ShowEffect(1)}}/>
                <img src={Product_3} alt="" onClick = {() =>{setItem(2);ShowEffect(2)}}/>
                <img src={Product_4} alt="" onClick = {() =>{setItem(3);ShowEffect(3)}}/>
            </div>
            <Gallery BigImgs={BigImgs} Item={Item} ShowEffect={ShowEffect} setItem={setItem}/>
        </div>
    )
}
const Gallery = (props) =>{
    return (
        <div className='disappear'>
             <div className='container'>
                <div className='close' onClick = {() => {
                    document.querySelector('.disappear').classList.remove('gallery');
                }}>
                    <i className="ri-close-line"></i>
                </div>
                <div className='image'>
                    <img src={props.BigImgs[props.Item]} alt="" />
                    <i className="ri-arrow-right-s-line"onClick= {() => {
                       if(props.Item < 3) {
                        props.setItem(props.Item + 1);
                        props.ShowEffect(props.Item + 1);
                       }
                    }}></i>
                    <i className="ri-arrow-left-s-line" onClick= {() => {
                       if(props.Item > 0) {
                        props.setItem(props.Item - 1);
                        props.ShowEffect(props.Item - 1);
                       }
                    }}></i>
                </div>
                <div className='images ig'>
                    <img src={Product_1} alt="" onClick = {() => {props.setItem(0);props.ShowEffect(0);}} className='selected'/>
                    <img src={Product_2} alt="" onClick = {() => {props.setItem(1);props.ShowEffect(1)}}/>
                    <img src={Product_3} alt="" onClick = {() => {props.setItem(2);props.ShowEffect(2)}}/>
                    <img src={Product_4} alt="" onClick = {() => {props.setItem(3);props.ShowEffect(3)}}/>
                </div>
             </div>
        </div>
    )
}

const Information = (props) =>{
    return(
        <div className='product-info'>
            <p>SNEAKER COMPANY</p>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <h1>$125.00 <span>50%</span></h1>
            <h3>$250.00</h3>
            <div className='add'>
                 <div className='btns'>
                    <button onClick = {() => props.Decrease()}>-</button>
                    <p className='quantity'>{props.count}</p>
                    <button onClick = {() => props.Increase()}>+</button>
                 </div>
                 <button className='adding' onClick={()=>{
                    if(props.count == 0)props.setCount(1)
                 }}>
                    <i className="ri-shopping-cart-2-line"></i>
                    Add to cart
                 </button>
            </div>
        </div>
    )
}
const Content = (props) =>{
    return (
        <div className='content'>
            <Pictures />
            <Information Increase = {props.Increase} Decrease = {props.Decrease} count = {props.count} setCount={props.setCount}/>
        </div>
    )
}

export default Content