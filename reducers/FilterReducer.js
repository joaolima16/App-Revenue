export default function FilterReducer(state={value:''},action){
    switch(action.type){
        case "ADD_FILTER" :
            return {value:action.data};
        
            case "UPDATE_FILTER":
            return {value:action.value}

            default: return state;

    }
}