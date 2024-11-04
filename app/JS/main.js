import "../css/style.css";
import { DOMSelector } from "./dom";
import { movies, shows, documentaries, podcasts } from "./media";

function card(x, y, z, d) {
  return `<div class="card">
            <h2 class="card-header">${x}</h2>
            <img src="${y}" alt="" class="card-img"></img>
            <h4 class="description">${d}</h4>
            <h4 class="release">${z}</h4>
            </div>`;
}

function addCard(c) {
  DOMSelector.container.insertAdjacentHTML("beforeend", c);
}

DOMSelector.form.addEventListener("m", function (event) {
  event.preventDefault();
  movies.forEach((movie) => {
    addCard(card(movie.name, movie.url, movie.release, movie.description));
  });
});
