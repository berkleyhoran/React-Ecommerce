export default function(state = {
    items:[]
}, action) {
    
    if(action.type === "ADD_ITEM"){
        return {
            items: state.items.concat(action.id)
        }
    }
    else if(action.type === "DELETE_ITEM"){
        return {
            items: state.items.filter((i) => {
                return i.id !== action.id
            })
        }
    }
    else if(action.type === "CHECKOUT"){
        return{
            items: []
        }
    }
    else{
        return state
    }
}