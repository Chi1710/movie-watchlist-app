import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const MovieControls = ({movie, type}) => {

  const { removedMovieFromWatchlist, 
          addMovieToWatched, 
          moveTowatchlist, 
          removedMovieFromWatched } = useContext(GlobalContext);
          
  return (
    <div className='inner-card-controls'>
        {type === 'watchlist' && (
            <>
            <button className='ctrl-btn'
            onClick={ () => addMovieToWatched(movie)}>
                <i className='fa-fw far fa-eye'></i>
            </button>

            <button className='ctrl-btn'
            onClick={ () => removedMovieFromWatchlist(movie.id)}>
                <i className='fa-fw fa fa-times'></i>
            </button>
            </>
        )}

        {type === "watched" && (
          <>
          <button className='ctrl-btn'
          onClick={ () => moveTowatchlist(movie)}>
              <i className='fa-fw far fa-eye-slash '></i>
          </button>

          <button className='ctrl-btn'
          onClick={ () => removedMovieFromWatched(movie.id)}>
              <i className='fa-fw fa fa-times'></i>
          </button>
          </>

        )}

    </div>
  )
}
