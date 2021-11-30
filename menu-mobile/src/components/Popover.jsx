import React, {Component} from "react";
import "./Popover.css"
import { Popover, Button } from 'antd';
import {CaretUpOutlined, ShoppingCartOutlined, CloseOutlined} from '@ant-design/icons';
import { getQuantity, getValue, Initial_quantity, NewItem } from "../store/Request";
import { useDispatch, useSelector } from "react-redux";
import { FieldInput } from "./Inside";
import { QuantitySelector } from "./Quantity";

const initialState = {
  visible:false
}


export default class Infos extends Component {

  state = {...initialState};


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
                <FieldInput name='form'></FieldInput>
            </div>
            <QuantitySelector></QuantitySelector>
            <div className='div-button'  >
              <UpdateArrayButtoms id={this.props.id} plate={this.props.name} price={this.props.price}
              ></UpdateArrayButtoms>
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

export function UpdateArrayButtoms(props) {
  const dispatch = useDispatch()

  const quantity = useSelector(getQuantity)
  const observations = useSelector(getValue)

  const a = () => {
      dispatch(NewItem({id:props.id, plate:props.plate, price:props.price, quantity:quantity, observation: observations}))
      dispatch(Initial_quantity())      
      
  }

  return(
      <Button type="primary" style={{backgroundColor:'#532B06', border:'none'}}
      shape="round" icon={<ShoppingCartOutlined />} size={"middle"} onClick={a}>
      </Button>
  )
}

