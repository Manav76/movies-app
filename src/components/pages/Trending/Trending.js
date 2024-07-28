import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleMovieCard from "../../SingleMovieCard/SingleMovieCard";

const Trending = () => {
  const [trendingContent, setTrendingContent] = useState([]);

  const fetchTrendingContent = async () => {
    const url =
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmVhNTM5ZTc3NjUyYmExYTFkNjVhMGY0ZGViZDU1MSIsIm5iZiI6MTcyMjE3MDYyMC4xNTQxNDgsInN1YiI6IjYxM2FmMTk4Njc4MjU5MDA4ZDgyNTI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zdj4c0taPQJTy6l0VsC60fVpwegYkY-bLB12oNX5dXs",
      },
    };

    try {
      const { data } = await axios.get(url, options);
      // console.log("Movies data" , data.results)
      setTrendingContent(data.results);
    } catch (error) {
      console.error("Error fetching trending content:", error);
    }
  };

  useEffect(() => {
    fetchTrendingContent();
  }, []);
  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {trendingContent &&
          trendingContent.map((e) => {
            console.log(e);
            return (
              <SingleMovieCard
                key={e.id}
                id={e.id}
                poster={e.poster_path}
                title={e.title || e.name}
                date={e.release_date || e.first_air_date}
                media_type={e.media_type}
                vote_average={e.vote_average}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Trending;
