const defaultState = {
    herosection: [],
    aboutNft: [],
    aboutContent: []
}
const pageReducer = (state=defaultState, action) => {
    if(action.type === "SET_HERO_SECTION"){
        let newState = {...state, herosection:action.payload}
        return newState;
    } else if(action.type === "SET_ABOUTNFT_SECTION"){
        let newState = {...state, aboutNft:action.payload}
        return newState;
    } else if(action.type === "SET_ABOUTCONTENT_SECTION"){
        let newState = {...state, aboutContent:action.payload}
        return newState;
    } 
    return state
}

export default pageReducer;