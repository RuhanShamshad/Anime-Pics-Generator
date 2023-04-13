const btnEl = document.getElementById("btn");
const animecontainerEl= document.querySelector(".anime-container");
const animeImgEl= document.querySelector(".anime-img");
const animenameEl= document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
    try {
        btnEl.disabled= true;
        btnEl.innerText= "Loading...";
        animenameEl.innerText= "Updating...";
        animeImgEl.src= "spiner.svg"; 
        const response =await fetch("https://api.catboys.com/img");
        const data =await response.json();
        btnEl.disabled= false;
        btnEl.innerText= "Get Anime";
        animecontainerEl.style.display= "block";
        animeImgEl.src= data.url; 
        animenameEl.innerText = data.artist;
    } catch (error) {
        console.log(error);
        btnEl.disabled= false;
        btnEl.innerText= "Get Anime";
        animenameEl.innerText = "An error happened pls try again";
    }
})