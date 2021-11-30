import React from "react";
import './Menu.css';
import Slide from "../components/Slide";
import Cart from "../components/Cart";



export default props => 
        <div>
            <div className='div-header'>
                <h1 className='title' >Cardápio</h1>
                <Cart></Cart>
            </div>
            
            <Slide></Slide>
        </div>