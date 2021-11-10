import React, {Component} from "react";
import "./Popover.css"
import { Popover, Button, InputNumber, Input } from 'antd';
import {CaretUpOutlined, ShoppingOutlined, ShoppingCartOutlined,PlusOutlined, MinusOutlined, CloseOutlined} from '@ant-design/icons';


const initialState = {
  visible:false,
  observation:{ quantity: 1, text:'', id:''},
}
const list = []
export default class Infos extends Component {

  state = {...initialState};

  constructor(props) {
    super(props)
    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    visible:false,
    observation:{ id: '', text:'', quantity: 1,},
  })

  GetId(){
    let min = 1;
    let max = 10000;
    let rand = Math.round(min+ (Math.random()* (max-min)))
    return rand
  }

  addValue() {
    const obs = {...this.state.observation}
    obs.quantity =  this.state.observation.quantity++
    return this.setState({obs})
  }

  RemoveValue(){
    const obs = {...this.state.observation}
    obs.quantity =  this.state.observation.quantity--
    return this.setState({obs})
  }

  UpdateField(event) {
    let field = event.target.name;
    let value = event.target.value;
    this.state.observation[field] = value
    return this.setState({observation:this.state.observation})
  }

  ReturnRequest(){
    const a = {...this.state.observation}
    a.id = this.props.id
    list.push(a)
    console.log(list)
    this.setState(this.getInitialState());
  }


  hide = () => {
    this.setState(this.getInitialState());
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
            <Input placeholder='Obsrvações do pedido' size={'middle'} value={this.state.observation.text} 
            onChange={e => this.UpdateField(e)} name='text' />
            </div>
            <div className='div-number'>
              <button onClick={e => this.RemoveValue(e)} >
                <MinusOutlined></MinusOutlined>
              </button>
              <InputNumber min={1} max={100}  
              value={this.state.observation.quantity} size={'small'} 
              onChange={e => this.UpdateField(e)} name='quantity'/>
              <button onClick={e => this.addValue(e)} >
                <PlusOutlined ></PlusOutlined>
              </button>
            </div>
            <div className='div-button'>
              <Button type="primary" style={{backgroundColor:'#532B06', border:'none'}}
                shape="round" icon={<ShoppingCartOutlined />} size={"middle"} onClick={this.ReturnRequest.bind(this)}>
              </Button>
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