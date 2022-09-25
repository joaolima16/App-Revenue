export default function Picture(state={value:''},action){
    switch(action.type){
        case "ADD_PICTURE":
            return {value:action.data};
        case "DELETE_PICTURE":
            return {value:''}
        default:
            return state
    }
}