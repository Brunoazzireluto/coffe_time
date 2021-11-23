import React from "react";
import {Card } from "antd";
import 'antd/dist/antd.css';
import "./Card.css"
import Cafe from "../images/coffe-image.jpg"

import Popover from "./Popover"
import Popover_cop from "./Popover_cop"

const { Meta } = Card;

export default props =>
<Card   cover={<img alt="example" src={Cafe}/>}  bodyStyle={{backgroundColor:'#121212'}}>
    <Meta  title={props.name}  style={{co:'#FFF'}}/>
    <div className='div-description'>
        {props.description}
    </div>
    <div className='div-price'>
        <div className='value'>
            <span className='dot'></span>
            <h3>{props.price}</h3>
        </div>
        <Popover_cop id={props.id}>
        
        </Popover_cop>
    </div>
    </Card>