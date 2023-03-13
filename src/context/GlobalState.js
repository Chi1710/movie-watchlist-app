import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') 
    ? JSON.parse(localStorage.getItem('watchlist')) 
    : [], 
    watched:  localStorage.getItem('watched') 
    ? JSON.parse(localStorage.getItem('watched')) 
    : []   
}

// create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);
    
    //action
    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
    }
    const removedMovieFromWatchlist = (id) => {
        dispatch({type: "REMOVED_MOVIE_FROM_WATCHLIST", payload: id});
    }
    const addMovieToWatched = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie});
    }
    // move movie from watched to watchlist
    const moveTowatchlist = (movie) => {
        dispatch({type: "MOVE_TO_WATCHLIST", payload: movie});
    }
    // removie from watched
    const removedMovieFromWatched = (id) => {
        dispatch({type: "REMOVED_MOVIE_FROM_WATCHED", payload: id});
    }

    return (
        <GlobalContext.Provider 
        value={{
            watchlist: state.watchlist,
            watched: state.watched, 
            addMovieToWatchlist,
            removedMovieFromWatchlist,
            addMovieToWatched,
            moveTowatchlist,
            removedMovieFromWatched
        }}
         >
            {props.children}
        </GlobalContext.Provider>
    )
}

