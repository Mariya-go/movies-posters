const updateMovieDom = (movieDom, movieData) => {
    movieDom.querySelector('img').src = movieData.src;
    movieDom.querySelector('img').alt = movieData.title;
    movieDom.querySelector('h6').innerText = movieData.title;
    movieDom.querySelector('h5').innerText = movieData.year;
}

export default updateMovieDom;