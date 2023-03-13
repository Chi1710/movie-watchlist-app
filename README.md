Movie Watchlist App

This Web App using React, implementing React Hooks(useState, useEffect, useContext, useReducer), Context API (createContext), fetching movie data from an external API (https://www.themoviedb.org/) and storing the data in localStorage.

install 'react-router-dom' to implement dynamic routing with ADD, WatchList and Watched.
build a store (GlobalState) to stores all the state data and it holds the movie objects and build a AppReducer to kept all the function to tell the store what to do with the data. 


In Add.js useState to manage all the movie datas that was fetch from API when user enter an input. 
Use movie object as a prop to pass it down to child compnent ResultCard.js to display all the movies.

In ResultCard.js, using ContextAPI (createContext) for the button to save the movies in a globalstate and can be access by any components.

Each movie display in watchlist and watch is from the child component- MovieCard.js
In watchlist, Watched and MovieCard, use useContext to gain the data from globalstate.

GlobalState also has an useReducer to kept all the function to transfer the state into the next state.
(Add to watchlist, Add to watched, Delete from watchlist, Delete from watched)


(https://www.youtube.com/watch?v=1eO_hNYzaSc)