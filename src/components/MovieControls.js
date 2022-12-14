import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const MovieControls = ({movie, type}) => {

  const { removedMovieFromWatchlist } = useContext(GlobalContext);
  return (
    <div className='inner-card-controls'>
        {type === 'watchlist' && (
            <>
            <button className='ctrl-btn'>
                <i className='fa-fw far fa-eye'></i>
            </button>

            <button className='ctrl-btn'
            onClick={ () => removedMovieFromWatchlist(movie.id)}>
                <i className='fa-fw fa fa-times'></i>
            </button>
            </>
        )}

    </div>
  )
}
