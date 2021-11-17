import React, {Component, useState} from "react";
import {ShoppingOutlined} from '@ant-design/icons';
import "./Cart.css";
import { Badge, Modal, Input  } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { NewItem } from "../store/Request";



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
    
    const list = useSelector(state => state.list)
    return (
        <React.Fragment>
            <button onClick={showModal}>
                <Badge count={list.length}  showZero >
                    <ShoppingOutlined/>
                </Badge>
            </button>
            <Modal title="pedido" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {console.log(list)}
                {list.map((x) => 
                    <div>
                        <p key={x.id}> prato: {x.plate} valor: {x.value}</p>
                    </div>
                )}
            </Modal>
        </React.Fragment>
    );
  };