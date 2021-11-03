import React, {Component, useState} from "react";
import { Popover, Button } from 'antd';
import {ShoppingCartOutlined, PlusOutlined, MinusOutlined} from '@ant-design/icons';
import { InputNumber } from 'antd';

const  n  = 1

const [currentValue, setCurrentValue] = useState(0)

export default class App extends React.Component {
  
  onChange(value) {
        console.log('changed', value);
  }
    
  
  addValue(n) {
    
  }

  
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    return (
      <Popover
        content={
            <div>
              <MinusOutlined></MinusOutlined>
                <InputNumber min={1} max={10} defaultValue={n} onChange={this.onChange} />
                <PlusOutlined></PlusOutlined>
                <a onClick={this.hide}>Close</a>
            </div>

    }
        title="Title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary" style={{backgroundColor:'#532B06', border:'none'}} shape="round" icon={<ShoppingCartOutlined />} size={"middle"} />
      </Popover>
    );
  }
}