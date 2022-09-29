export default function RecipeViewerData(state={value:''}, action){
    switch(action.type){
        case 'ADD_DATA_VIEWER':
            return {value:action.data};
        case 'REMOVE_DATA_VIEWER':
            return {value:''};
        default:
            return state;
    }
}