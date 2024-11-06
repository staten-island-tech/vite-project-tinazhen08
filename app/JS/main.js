import "../css/style.css";
import { DOMSelector } from "./dom";
import { movies, shows, documentaries, podcasts } from "./media";

function card(x) {
  x.forEach((item)=>
    DOMSelector.container.insertAdjacentHTML(
      'beforeend',
      `<div class="card">
            <h2 class="card-header">${item.name}</h2>
            <img src="${item.url}" alt="" class="card-img"></img>
            <h4 class="description">${item.description}</h4>
            <h4 class="release">${item.release}</h4>
            </div>`
    ))
}

function Movies(){
  card(movies);

  DOMSelector.form.insertAdjacentHTML(
    'beforeend',
    
  )
}

function All(){
  card(movies);
  card(shows);
  card(documentaries);
  card(podcasts);
}

All();