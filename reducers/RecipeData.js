export default function RecipeData(state={value:''},action){
    switch(action.type){
        case 'DATA_VIEWER':
            return {value:action.data};
        case 'REMOVE_DATA':
            return {value:''};
            default: return state;
            

    }
}