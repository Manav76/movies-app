import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleMovieCard from "../../SingleMovieCard/SingleMovieCard";
import PaginationComponent from "../../Pagination/Pagination";
import "./Trending.css"
import Genres from "../../Genres/Genres";
import useGenre from "../../../hooks/useGenre";
const Trending = () => {
  const [content, setContent] = useState([]);
  const [page , setPage ] = useState(1);
  const [numOfPages , setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);
  const fetchContent = async () => {
    const url =
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&page=${page}&with_genres=${genreforURL}`;    
    const options = {
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmVhNTM5ZTc3NjUyYmExYTFkNjVhMGY0ZGViZDU1MSIsIm5iZiI6MTcyMjI4MTYwNS41MTE2NCwic3ViIjoiNjEzYWYxOTg2NzgyNTkwMDhkODI1MjY3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0uLLGqBolV4-CgVGEKxC44OnoeL4iMCNGJsADUP0MIM'
      },
    };

    try {
      const { data } = await axios.get(url, options);
       console.log("Movies data" , data.results)
      setContent(data.results);
      setNumOfPages(data.total_pages)
    } catch (error) {
      console.error("Error fetching trending content:", error);
    }
  };

  useEffect(() => {
    window.scroll(0,0)
    fetchContent();
  }, [genreforURL,page]);
  return (
    <div>
      <span className="pageTitle">Trending</span>
      <Genres
       type="movie"
       selectedGenres={selectedGenres}
       setSelectedGenres={setSelectedGenres}
       genres={genres}
       setGenres={setGenres}
       setPage={setPage}
      
      />

      
      <div className="trending">

        {content &&
          content.map((e) => {
            console.log(e);
            return (
              <SingleMovieCard
                key={e.id}
                id={e.id}
                poster={e.poster_path}
                title={e.title || e.name}
                date={e.release_date || e.first_air_date}
                media_type="movie"
                vote_average={e.vote_average}
              />
            );
          })}
      </div>
      {numOfPages > 1 && (
        <PaginationComponent setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Trending;
