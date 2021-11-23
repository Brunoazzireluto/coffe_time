import React, {Component} from "react";
import "./Popover.css"
import { Popover, Button, InputNumber, Input } from 'antd';
import {CaretUpOutlined, ShoppingOutlined, ShoppingCartOutlined,PlusOutlined, MinusOutlined, CloseOutlined} from '@ant-design/icons';
import { NewItem } from "../store/Request";
import { useDispatch } from "react-redux";
import { FieldInput } from "./Inside";
import { QuantitySelector } from "./Quantity";

const initialState = {
  visible:false
}


export default class Infos extends Component {

  state = {...initialState};

  GetId(){
    let min = 1;
    let max = 10000;
    let rand = Math.round(min+ (Math.random()* (max-min)))
    return rand
  }


  hide = () => {
    this.setState({visible:false});
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    return (
      <Popover
        content={
          <div className='div-popover'>
            <div className='div-text' >
                <FieldInput></FieldInput>
            </div>
            <QuantitySelector></QuantitySelector>
            <div className='div-button'>
              <UpdateArrayButtoms plate={'aaa'} ></UpdateArrayButtoms>
              <Button type="primary" style={{backgroundColor:'#532B06', border:'none'}}
                shape="round" icon={<CloseOutlined />} size={"middle"} onClick={this.hide} >
              </Button>
            </div>


          </div>
        }
        title="Adicionar ao Pedido"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      > <label className='id-invisible'>
          {this.props.id}
        </label>
        <Button type="primary" style={{backgroundColor:'#532B06', border:'none'}} shape="round" icon={<CaretUpOutlined />} size={"middle"} />
      </Popover>
    );
  }
}

export function UpdateArrayButtoms() {
  const dispatch = useDispatch()

  const a = () => {
      return dispatch(NewItem({id:8, plate:'cc', value:9}))
  }

  return(
      <Button type="primary" style={{backgroundColor:'#532B06', border:'none'}}
      shape="round" icon={<ShoppingCartOutlined />} size={"middle"} onClick={a}>
      </Button>
  )
}

