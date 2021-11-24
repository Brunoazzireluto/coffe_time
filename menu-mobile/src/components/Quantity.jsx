import { useDispatch, useSelector } from "react-redux";
import { ChangeQuantity, Decrement, getQuantity, Increment } from "../store/Request";
import {Button, InputNumber } from 'antd';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';

export function QuantitySelector(){
    const dispatch = useDispatch()

    const quantity = useSelector(getQuantity)

    function increment(){
        dispatch(Increment())
    }

    function decrement(){
        dispatch(Decrement())
    }

    function onChange(e){
      dispatch(ChangeQuantity(e.target.value))
  }

    return(
        <div className='div-number'>
              <button onClick={decrement}>
                <MinusOutlined></MinusOutlined>
              </button>
              <InputNumber min={1} max={100}  
              value={quantity} size={'small'}  
              name='quantity' disabled/>
              <button onClick={increment} >
                <PlusOutlined ></PlusOutlined>
              </button>
            </div>
    )
}