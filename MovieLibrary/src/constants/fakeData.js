const categories = [
  { id: 1, name: "Horror" },
  { id: 2, name: "Romance" },
  { id: 3, name: "Comedy" },
  { id: 4, name: "Action" },
  { id: 5, name: "Thriller" },
  { id: 6, name: "Drama" },
  { id: 7, name: "Crime" },
  { id: 8, name: "Adventure" },
  { id: 9, name: "Fantasy" },
];

const userProfile = {
  name: "Zehra Tok",
  profile_image: require("../assets/images/profile.png"),
};

const movies = [
  {
    id: 1,
    Title: "Harry Potter and the Deathly Hallows: Part 2",
    Year: "2011",
    Poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    Rated:"PG-13",
    Released:"15 Jul 2011",
    Runtime:"130 min",
    Genre:"Adventure, Family, Fantasy",
    Director:"David Yates",
    Writer:"Steve Kloves, J.K. Rowling",
    Actors:"Daniel Radcliffe, Emma Watson, Rupert Grint",
    Plot:"Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    Language:"English, Latin",
    Country:"United Kingdom, United States",
    Awards:"Nominated for 3 Oscars. 46 wins & 94 nominations total",
    Metascore:"85",
    imdbRating:"8.1",
    imdbVotes:"872,242",
    imdbID:"tt1201607",
    Type:"movie",
    DVD:"11 Nov 2011",
    BoxOffice:"$381,447,587",
    Production:"N/A",
    Website:"N/A",
    Response:"True"
  },

  {
    id: 2,
    Title: "Harry Potter and the Sorcerer's Stone",
    Year: "2001",
    imdbID: "tt0241527",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
  },

];
export default { categories, movies, userProfile };
