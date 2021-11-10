import React, {Component, useState} from "react";
import {ShoppingOutlined} from '@ant-design/icons';
import "./Cart.css";
import { Badge, Modal, Input  } from "antd";

const initialState = {
    list:[],
    name:'',
    count:0,
    visible:false,
}


export default class Cart extends Component{

    state = {...initialState}

    

    showModal = () => {
        this.setState({visible:true})
    };
    
    handleOk = () => {
        this.setState({visible:false})
    };
    
    handleCancel = () => {
        this.setState({visible:false})
    };
    

    render(){
        return(
            <React.Fragment>
            <button onClick={this.showModal}>
                <Badge count={this.state.count}  showZero >
                    <ShoppingOutlined/>
                </Badge>
            </button>
            <Modal title="pedido" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            </React.Fragment>

        )
    }

};
