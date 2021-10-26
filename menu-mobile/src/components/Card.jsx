import React from "react";
import {Card, Button } from "antd";
import 'antd/dist/antd.css';
import "./Card.css"
import Cafe from "../images/coffe-image.jpg"
import {ShoppingCartOutlined} from '@ant-design/icons';

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
            <h3>R$ {props.price}</h3>
        </div>
        <Button type="primary" style={{backgroundColor:'#532B06', border:'none'}} shape="round" icon={<ShoppingCartOutlined />} size={"middle"} />
    </div>
    </Card>