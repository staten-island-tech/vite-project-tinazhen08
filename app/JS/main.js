import "../css/style.css";
import { DOMSelector } from "./dom";
import { movies, shows, documentaries, podcasts } from "./media";

function card(x) {
  x.forEach((item) =>
    DOMSelector.container.insertAdjacentHTML(
      'beforeend',
      `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.url}" alt="" class="card-img"></img>
        <h4 class="description">${item.description}</h4>
        <h4 class="release">${item.release}</h4>
      </div>`
    )
  );
}

function Movies()
function media(){
  DOMSelector.form.addEventListener("click", function (event) {
    event.preventDefault();
    DOMSelector.container.innerHTML = ""; // Clear previous cards

    if (event.target.classList.contains("movies")) {
      card(movies);
    } else if (event.target.classList.contains("shows")) {
      card(shows);
    } else if (event.target.classList.contains("documentaries")) {
      card(documentaries);
    } else if (event.target.classList.contains("podcasts")) {
      card(podcasts);
    } else if (event.target.classList.contains("all")) {
      card(movies);
      card(shows);
      card(documentaries);
      card(podcasts);
    }else{
      return 
    }
  });
}

media();
