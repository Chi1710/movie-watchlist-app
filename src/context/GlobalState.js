import React, {createContext, useReducer, useEffect} from "react";

//initial state
const initialState = {
    watchlist: [],
    watched: [],
    
}

// create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlabalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

}

