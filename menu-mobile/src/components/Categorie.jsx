import React from "react";
import {Img} from 'react-image';
import './Categorie.css'

export default props => 
    <div className='div-title'>
        <Img src={props.image}  width='30px' height='30px'/>
        <h2>{props.categorie}</h2>
    </div>