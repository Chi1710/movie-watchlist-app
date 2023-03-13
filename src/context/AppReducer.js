export default function AppReducer(state, action) {
    switch(action.type) {
        case"ADD_MOVIE_TO_WATCHLIST":
        return {
            ...state,
            watchlist: [action.payload, ...state.watchlist], 
        }
        case"REMOVED_MOVIE_FROM_WATCHLIST":
        return {
            ...state,
            watchlist: state.watchlist.filter( movie => movie.id !== action.payload)
        }
        case"ADD_MOVIE_TO_WATCHED":
        return {
            ...state,
            watchlist: state.watchlist.filter( movie => movie.id !== action.payload.id),
            watched : [action.payload, ...state.watched]
        }
        default:
            return state;
    }

}
