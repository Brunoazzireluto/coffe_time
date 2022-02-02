import React, {useState} from "react";
import {ShoppingOutlined} from '@ant-design/icons';
import "./Cart.css";
import { Badge, Modal } from "antd";
import { useSelector } from "react-redux";
import {getRequest, getList } from "../store/Request";



export default function Cart() {
    const [isModalVisible, setIsModalVisible] = useState(false);  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      console.log(list)
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