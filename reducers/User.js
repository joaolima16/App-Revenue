export default function User(state={value:''}, action){
    switch(action.type){
        case 'ADD_USER_DATA':
            return {value:action.data}
        case 'REMOVE_USER_DATA':
            return {value:""}
        default:
            return state
    }
}