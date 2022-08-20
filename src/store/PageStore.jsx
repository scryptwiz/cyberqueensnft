const defaultState = {
    herosection: [],
    aboutNft: [],
    aboutContent: [],
    traitContent: [],
    traitEval: [],
    traits: [],
    roadmap: [],
    team: [],
    news: [],
    socialMedia: [],
    newsField: []
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
    } else if(action.type === "SET_TRAITCONTENT_SECTION"){
        let newState = {...state, traitContent:action.payload}
        return newState;
    } else if(action.type === "SET_TRAITEVAL_SECTION"){
        let newState = {...state, traitEval:action.payload}
        return newState;
    } else if(action.type === "SET_TRAITS"){
        let newState = {...state, traits:action.payload}
        return newState;
    } else if(action.type === "SET_ROADMAP"){
        let newState = {...state, roadmap:action.payload}
        return newState;
    } else if(action.type === "SET_TEAM"){
        let newState = {...state, team:action.payload}
        return newState;
    } else if(action.type === "SET_NEWS"){
        let newState = {...state, news:action.payload}
        return newState;
    } else if(action.type === "SET_SOCIALS"){
        let newState = {...state, socialMedia:action.payload}
        return newState;
    } else if(action.type === "SET_NEWSFIELD"){
        let newState = {...state, newsField:action.payload}
        return newState;
    } 
    return state
}

export default pageReducer;