const initialState = {
    tierlist: []
};
const tierlistReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD":
            return {...state, tierlist: state.tierlist.concat({id:Math.random(), name:action.payload, tier:"benchTier", index: 0 })};
        case "DELETE":
            return {...state, tierlist: state.tierlist.filter( item => item.id !== action.payload)};
        case "CHANGING_TIER":
            return {...state, tierlist: state.tierlist.filter( item => item.tier !== action.payload, item => item.index !== action.payload)};
        default: return state;
    }
}

export default tierlistReducer;