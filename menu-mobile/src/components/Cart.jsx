import React, {Component, useState} from "react";
import {ShoppingOutlined} from '@ant-design/icons';
import "./Cart.css";
import { Badge, Modal, Input  } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getQuantity, getValue, NewItem } from "../store/Request";
import { getList } from "../store/Request";



export default function Cart() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch()
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      dispatch(NewItem())
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    
    const list = useSelector(getList)
    return (
        <React.Fragment>
            <button onClick={showModal}>
                <Badge count={list.length}  showZero >
                    <ShoppingOutlined/>
                </Badge>
            </button>
            <Modal title="pedido" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {list.map((x) => 
                    <div>
                        <p key={x.id}> Prato: {x.plate} Valor: {x.price} Quantidade: {x.quantity} Observações: {x.observation}</p>
                    </div>
                )}
                {console.log(list)}
            </Modal>
        </React.Fragment>
    );
  };