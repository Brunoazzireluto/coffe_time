import { useDispatch } from "react-redux";
import { ChangeValue } from "../store/Request";
import { Input } from "antd";

export function FieldInput ({value}) {
    const dispatch = useDispatch()

    function onChange(e){
        dispatch(ChangeValue(e.target.value))
    }

    return(
        <Input placeholder='Obsrvações do pedido' size={'middle'} value={value} 
        onChange={onChange} name='text' />
    )
}