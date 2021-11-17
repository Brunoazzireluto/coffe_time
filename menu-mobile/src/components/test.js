import { NewItem } from "../store/Request";
import { useDispatch } from "react-redux";
import React  from "react";
import "./Popover.css"
import { Button} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';


export function UpdateArrayButtom() {
    const dispatch = useDispatch()

    const a = () => {
        return dispatch(NewItem())
    }
  
    return(
        <Button type="primary" style={{backgroundColor:'#532B06', border:'none'}}
        shape="round" icon={<ShoppingCartOutlined />} size={"middle"} onClick={a}>
        </Button>
    )
}