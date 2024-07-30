import React from 'react'
import axios from 'axios'
import { Chip } from '@mui/material';
import { useEffect } from "react";
const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}
) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };
  const fetchGenres = async()=>{
    const url =
    `https://api.themoviedb.org/3/genre/${type}/list?language=en-US`;    
    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
      },
  }
  try {
    const { data } = await axios.get(url, options);
    setGenres(data.genres);
    console.log("genres" , data.genres);
  } catch (error) {
    console.error("Error fetching trending content:", error);
  }
}
  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres([]); 
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div style={{ padding: "6px 0" }}>
    {selectedGenres.map((genre) => (
      <Chip
      style={{
        margin: 2,
        backgroundColor: '#1976d2', // Blue background for selected genres
        color: '#fff', // White text color
        borderColor: '#0d47a1', // Darker blue border
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
        label={genre.name}
        key={genre.id}
        color="primary"
        clickable
        size="small"
        onDelete={() => handleRemove(genre)}
      />
    ))}
    {genres.map((genre) => (
      <Chip
      style={{
        margin: 2,
        backgroundColor: '#1976d2', // Blue background for selected genres
        color: '#fff', // White text color
        borderColor: '#0d47a1', // Darker blue border
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
        label={genre.name}
        key={genre.id}
        clickable
        size="small"
        onClick={() => handleAdd(genre)}
      />
    ))}
  </div>
  )
}

export default Genres