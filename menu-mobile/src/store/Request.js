const initialState = {
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
        default:
            return state
    }
}

export const getList = state => state.list

// actions

export function NewItem(data){
    return{
        type:'ADD_ITEM',
        payload:data
    }
}