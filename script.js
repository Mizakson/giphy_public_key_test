const img = document.querySelector('img');

function catImage() {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=WMERAG4jL08fynawLJZW2589oOl7E8jV&s=cats', {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  });
}

function searchImage(term) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=WMERAG4jL08fynawLJZW2589oOl7E8jV&s=${term}`, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    if (response.meta.status !== 200) {
        throw new Error("INVALID SEARCH TERM")
    } 
    
    if (document.querySelector("#search").value === "") {
        throw new Error("ENTER A SEARCH TERM")
    }
    
    else {
        img.src = response.data.images.original.url;
    }
  });
}

document.querySelector("#clicker").addEventListener("click", catImage)

document.querySelector("#searcher").addEventListener("click", function() {
    let val = document.querySelector("#search").value
    searchImage(val)
})