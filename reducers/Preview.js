export default function Preview(state={value:false}, action){
    switch(action.type){
        case "OPEN_PREVIEW":
            return {value:true}
        case "CLOSE_PREVIEW":
            return {value:false}
        default:
            return state;
    }
}