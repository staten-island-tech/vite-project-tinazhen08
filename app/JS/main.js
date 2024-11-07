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
  DOMSelector.form.addEventListener("submit", function (event) {
    //Remove old cards from screen
    document.querySelector(".container").innerHTML = "";
    event.preventDefault();
  
    card(movies);
  });
}

function Shows(){
  DOMSelector.form.addEventListener("submit", function (event) {
    //Remove old cards from screen
    document.querySelector(".container").innerHTML = "";
    event.preventDefault();
  
    card(shows);
  });
}

function All(){
  DOMSelector.form.addEventListener("submit", function (event) {
    //Remove old cards from screen
    document.querySelector(".container").innerHTML = "";
    event.preventDefault();
  
    card(movies);
    card(shows);
    card(documentaries);
    card(podcasts);
  });
};

Movies();
Shows();
All();
