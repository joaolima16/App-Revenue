export default function DB_Insert(state = {value:''}, action){
    switch(action.type){
        case "ADD_DATA_INSERT":
            return {value:action.data}
        case "DELETE_DATA_INSERT":
            return {value:''}
        default:
            return state
    }
}