const inititalState = {
    menu: []
}
const reducer = (state=inititalState,action)=> {
    switch(action.type){
        case 'MENU_LOADED':
            return {
                menu: action.payload
            };
        default:
            return state;    
    }
}
export default reducer;