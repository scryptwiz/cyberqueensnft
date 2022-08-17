const defaultState = {
    herosection: []
}
const pageReducer = (state=defaultState, action) => {
    if(action.type === "SET_HERO_SECTION"){
        let newState = {...state, herosection:action.payload}
        return newState;
    }
    return state
}

export default pageReducer;