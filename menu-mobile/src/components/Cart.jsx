import React, {useState} from "react";
import {ShoppingOutlined} from '@ant-design/icons';
import "./Cart.css";
import { Badge, Modal } from "antd";
import { useSelector } from "react-redux";
import {getRequest, getList } from "../store/Request";
import axios from "axios";


const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};
  
const baseURL = 'http://127.0.0.1:5000/api/'

export default function Cart() {
    const [isModalVisible, setIsModalVisible] = useState(false);  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
        axios.post(baseURL+'pedido/'+request, {plates:list}, config).then(resp =>{
            console.log(resp.data)
        })
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    


    const list = useSelector(getList)
    const request = useSelector(getRequest);
    return (
        <React.Fragment>
            <button onClick={showModal}>
                <Badge count={list.length}  showZero >
                    <ShoppingOutlined/>
                </Badge>
            </button>
            <Modal title={"Pedido N° " + request} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {list.map((x) => 
                    <div>
                        <p key={x.id}> Prato: {x.plate} Valor: {x.price} Quantidade: {x.quantity} Observações: {x.observation}</p>
                    </div>
                )}
            </Modal>
        </React.Fragment>
    );
  };