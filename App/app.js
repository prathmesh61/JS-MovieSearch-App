const API_KEY = `6f0a51047d1a5047327fe89cc3ffa5d3`;

const PUPULAR_API = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

// "https://api.Themoviedb.Org/3/Search/Movie?&Api_key=04c35731a5ee918f014970082a0088b1&Query=";

// const getMovies = async () => {
//   const res = await fetch(PUPULAR_API);
//   const data = await res.json();
//   showMovies(data.results);
//   console.log(data.results);
// };

// getMovies();

async function getMovies(Url) {
  const resp = await fetch(Url);
  const respData = await resp.json();

  // Movie Aa Gyi
  // Yaha Pe Show Karenge
  showMovies(respData.results);
}
getMovies(PUPULAR_API);

const moiveBox = document.getElementById("movie-box ");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

const showMovies = (Movies) => {
  moiveBox.innerHTML = "";
  Movies.forEach((movie) => {
    const { title, poster_path, overview, vote_average } = movie;

    //create New Div
    const movieEl = document.createElement("div");
    movieEl.classList.add("box");

    movieEl.innerHTML = `
    <img src=${IMGPATH + poster_path} alt=${title}/>
                <div class="overlay">
                    <div class="title"> 
                        <h2>${title} </h2>
                        <span>${vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                    ${overview}
                    </p>
                 </div>
    `;

    moiveBox.appendChild(movieEl);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const SEARCHTERM = search.value;

  if (SEARCHTERM) {
    getMovies(SEARCH_API + SEARCHTERM);
  } else {
    search.value = "";
  }
});
