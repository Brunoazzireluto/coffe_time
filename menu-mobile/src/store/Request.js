const initialState = {
    request: Math.round(1+ (Math.random()* (10000-1))).toString(),
    value: '',
    quantity:1,
    plates: []
}

export default function requestsReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_ITEM':
            return{
                ...state,
                plates:[...state.plates, action.payload]
            }
        case 'CHANGE_VALUE':
            return {...state, value:action.payload}
        case 'INCREMENT_VALUE':
            return {...state, quantity: state.quantity+1}
        case 'DRECREMENT_VALUE':
            return {...state, quantity: state.quantity-1}
        case 'CHANGE_QUANTITY':
            return {...state, quantity:action.payload}
        case 'INITIAL_QUANTITY':
            return {...state, quantity: 1}
        default:
            return state
    }
}

export const getList = state => state.plates
export const getValue = state => state.value
export const getQuantity = state => state.quantity
export const getRequest = state => state.request

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

export const ChangeQuantity = (quantity) => ({
    type:'CHANGE_QUANTITY',
    payload:quantity
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

export const Initial_quantity = () =>{
    return {
        type: 'INITIAL_QUANTITY'
    }
}

