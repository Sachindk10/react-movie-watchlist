export const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";

const genre_id_1 = "12";
const genre_id_2 = "16";
const genre_id_3 = "35";
export const Adventure_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id_1}&language=en-US`;
export const Animation_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id_2}&language=en-US`;
export const Comedy_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre_id_3}&language=en-US`;