const initialState = {
    value: '',
    quantity:1,
    list:
    [
        {   id:1,
            plate:'algum',
            value:25.05
        },
        {
            id:2,
            plate:'outro',
            value: 24.60,
        }
    ]
}

export default function requestsReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_ITEM':
            return{
                ...state,
                list:[...state.list, action.payload]
            }
        case 'CHANGE_VALUE':
            return {...state, value:action.payload}
        case 'INCREMENT_VALUE':
            return {...state, quantity: state.quantity+1}
        case 'DRECREMENT_VALUE':
            return {...state, quantity: state.quantity-1}
        default:
            return state
    }
}

export const getList = state => state.list
export const getValue = state => state.value
export const getQuantity = state => state.quantity

// actions

export function NewItem(data){
    return{
        type:'ADD_ITEM',
        payload:data
    }
}

export const ChangeValue = (value) => ({
    type:'CHANGE_VALUE',
    payload:value
})

export const Increment = () => {
    return {
        type:'INCREMENT_VALUE'
    }
}

export const Decrement = () => {
    return {
        type:'DRECREMENT_VALUE'
    }
}