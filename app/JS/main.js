import "../css/style.css";
import { DOMSelector } from "./dom";
import { movies, shows, documentaries, podcasts } from "./Products";

function card(x) {
  x.forEach((item) =>
    DOMSelector.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.url}" alt="" class="card-img"></img>
        <p class="description">${item.description}</p>
        <p class="release">${item.release}</p>
        <h3 class="price">$${item.price}</h3>
      </div>`
    )
  );
}

function movGenres(movies) {
  DOMSelector.genres.addEventListener("click", function (event) {
    event.preventDefault();
    DOMSelector.container.innerHTML = ""; // Clear previous cards

    if (event.target.classList.contains("action")) {
      const actMovies = movies
        .filter((movie) => movie.genre === "Action")
        .sort((a, b) => a.release - b.release);
      card(actMovies);
    } else if (event.target.classList.contains("comedy")) {
      const comMovies = movies
        .filter((movie) => movie.genre === "Comedy")
        .sort((a, b) => a.release - b.release);
      card(comMovies);
    } else if (event.target.classList.contains("drama")) {
      const draMovies = movies
        .filter((movie) => movie.genre === "Drama")
        .sort((a, b) => a.release - b.release);
      card(draMovies);
    } else if (event.target.classList.contains("horror")) {
      const horMovies = movies
        .filter((movie) => movie.genre === "Horror")
        .sort((a, b) => a.release - b.release);
      card(horMovies);
    } else if (event.target.classList.contains("scifi")) {
      const sciMovies = movies
        .filter((movie) => movie.genre === "SciFi")
        .sort((a, b) => a.release - b.release);
      card(sciMovies);
    } else if (event.target.classList.contains("romance")) {
      const romMovies = movies
        .filter((movie) => movie.genre === "Romance")
        .sort((a, b) => a.release - b.release);
      card(romMovies);
    } else if (event.target.classList.contains("animation")) {
      const aniMovies = movies
        .filter((movie) => movie.genre === "Animation")
        .sort((a, b) => a.release - b.release);
      card(aniMovies);
    } else {
      return;
    }
  });
}

function shoGenres(shows) {
  DOMSelector.genres.addEventListener("click", function (event) {
    event.preventDefault();
    DOMSelector.container.innerHTML = ""; // Clear previous cards

    if (event.target.classList.contains("sitcom")) {
      const sitcomShows = shows
        .filter((show) => show.genre === "Sitcom")
        .sort((a, b) => a.release.slice(0, 4) - b.release.slice(0, 4));
      card(sitcomShows);
    } else if (event.target.classList.contains("dramaSeries")) {
      const draShows = shows
        .filter((show) => show.genre === "DramaSeries")
        .sort((a, b) => a.release.slice(0, 4) - b.release.slice(0, 4));
      card(draShows);
    } else if (event.target.classList.contains("realityTV")) {
      const reaShows = shows
        .filter((show) => show.genre === "RealityTV")
        .sort((a, b) => a.release.slice(0, 4) - b.release.slice(0, 4));
      card(reaShows);
    } else if (event.target.classList.contains("thriller")) {
      const thrShows = shows
        .filter((show) => show.genre === "Thriller")
        .sort((a, b) => a.release.slice(0, 4) - b.release.slice(0, 4));
      card(thrShows);
    } else if (event.target.classList.contains("fantasy")) {
      const fanShows = shows
        .filter((show) => show.genre === "Fantasy")
        .sort((a, b) => a.release.slice(0, 4) - b.release.slice(0, 4));
      card(fanShows);
    } else if (event.target.classList.contains("mystery")) {
      const mysShows = shows
        .filter((show) => show.genre === "Mystery")
        .sort((a, b) => a.release.slice(0, 4) - b.release.slice(0, 4));
      card(mysShows);
    } else if (event.target.classList.contains("talkShow")) {
      const talShows = shows
        .filter((show) => show.genre === "TalkShow")
        .sort((a, b) => a.release.slice(0, 4) - b.release.slice(0, 4));
      card(talShows);
    } else {
      return;
    }
  });
}

function docGenres(documentaries) {
  DOMSelector.genres.addEventListener("click", function (event) {
    event.preventDefault();
    DOMSelector.container.innerHTML = ""; // Clear previous cards

    if (event.target.classList.contains("nature")) {
      const natDocs = documentaries
        .filter((documentary) => documentary.genre === "Nature")
        .sort((a, b) => a.release - b.release);
      card(natDocs);
    } else if (event.target.classList.contains("history")) {
      const hisDocs = documentaries
        .filter((documentary) => documentary.genre === "History")
        .sort((a, b) => a.release - b.release);
      card(hisDocs);
    } else if (event.target.classList.contains("trueCrime")) {
      const tcDocs = documentaries
        .filter((documentary) => documentary.genre === "TrueCrime")
        .sort((a, b) => a.release - b.release);
      card(tcDocs);
    } else if (event.target.classList.contains("science")) {
      const sciDocs = documentaries
        .filter((documentary) => documentary.genre === "Science")
        .sort((a, b) => a.release - b.release);
      card(sciDocs);
    } else if (event.target.classList.contains("biography")) {
      const bioDocs = documentaries
        .filter((documentary) => documentary.genre === "Biography")
        .sort((a, b) => a.release - b.release);
      card(bioDocs);
    } else {
      return;
    }
  });
}

function podGenres(podcasts) {
  DOMSelector.genres.addEventListener("click", function (event) {
    event.preventDefault();
    DOMSelector.container.innerHTML = ""; // Clear previous cards

    if (event.target.classList.contains("trueCrime")) {
      const tcPodcasts = podcasts
        .filter((podcast) => podcast.genre === "TrueCrime")
        .sort((a, b) => a.release.slice(0, 4) - b.release.slice(0, 4));
      card(tcPodcasts);
    } else if (event.target.classList.contains("comedy")) {
      const comPodcasts = podcasts
        .filter((podcast) => podcast.genre === "Comedy")
        .sort((a, b) => a.release.slice(0, 4) - b.release.slice(0, 4));
      card(comPodcasts);
    } else if (event.target.classList.contains("business")) {
      const busPodcasts = podcasts
        .filter((podcast) => podcast.genre === "Business")
        .sort((a, b) => a.release.slice(0, 4) - b.release.slice(0, 4));
      card(busPodcasts);
    } else if (event.target.classList.contains("technology")) {
      const techPodcasts = podcasts
        .filter((podcast) => podcast.genre === "Technology")
        .sort((a, b) => a.release.slice(0, 4) - b.release.slice(0, 4));
      card(techPodcasts);
    } else if (event.target.classList.contains("society")) {
      const socPodcasts = podcasts
        .filter((podcast) => podcast.genre === "Society")
        .sort((a, b) => a.release.slice(0, 4) - b.release.slice(0, 4));
      card(socPodcasts);
    } else {
      return;
    }
  });
}

function media() {
  DOMSelector.buttons.addEventListener("click", function (event) {
    event.preventDefault();
    DOMSelector.container.innerHTML = ""; // Clear previous cards

    if (event.target.classList.contains("movies")) {
      DOMSelector.genres.innerHTML = "";
      DOMSelector.genres.insertAdjacentHTML(
        "beforeend",
        `<button class="action" type="click">Action</button>
        <button class="comedy" type="click">Comedy</button>
        <button class="drama" type="click">Drama</button>
        <button class="horror" type="click">Horror</button>
        <button class="scifi" type="click">SciFi</button>
        <button class="romance" type="click">Romance</button>
        <button class="animation" type="click">Animation</button>`
      );
      card(movies);
      movGenres(movies);
    } else if (event.target.classList.contains("shows")) {
      DOMSelector.genres.innerHTML = "";
      DOMSelector.genres.insertAdjacentHTML(
        "beforeend",
        `<button class="sitcom" type="click">Sitcom</button>
        <button class="dramaSeries" type="click">DramaSeries</button>
        <button class="realityTV" type="click">RealityTV</button>
        <button class="thriller" type="click">Thriller</button>
        <button class="fantasy" type="click">Fantasy</button>
        <button class="mystery" type="click">Mystery</button>
        <button class="talkShow" type="click">TalkShow</button>`
      );

      card(shows);
      shoGenres(shows);
    } else if (event.target.classList.contains("documentaries")) {
      DOMSelector.genres.innerHTML = "";
      DOMSelector.genres.insertAdjacentHTML(
        "beforeend",
        `<button class="nature" type="click">Nature</button>
        <button class="history" type="click">History</button>
        <button class="trueCrime" type="click">TrueCrime</button>
        <button class="science" type="click">Science</button>
        <button class="biography" type="click">Biography</button>`
      );

      card(documentaries);
      docGenres(documentaries);
    } else if (event.target.classList.contains("podcasts")) {
      DOMSelector.genres.innerHTML = "";
      DOMSelector.genres.insertAdjacentHTML(
        "beforeend",
        `<button class="trueCrime" type="click">TrueCrime</button>
        <button class="comedy" type="click">Comedy</button>
        <button class="business" type="click">Business</button>
        <button class="technology" type="click">Technology</button>
        <button class="society" type="click">Society</button>`
      );

      card(podcasts);
      podGenres(podcasts);
    } else if (event.target.classList.contains("all")) {
      DOMSelector.genres.innerHTML = "";
      card(movies);
      card(shows);
      card(documentaries);
      card(podcasts);
    } else {
      return;
    }
  });
}

function theme() {
  document.querySelector(".btn").addEventListener("click", function () {
    if (document.body.classList.contains("light")) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });
}

media();
theme();
