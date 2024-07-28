import React from 'react'

const SingleMovieCard = ({
  id, poster , title , date , media_type , vote_average
}) => {
  return (
    <div>{title}</div>
  )
}

export default SingleMovieCard