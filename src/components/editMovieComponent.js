const editMovieComponent = (movieData) => {
    const container = document.querySelector('.selected');

    const img = container.querySelector('.image');
    img.src = movieData.src;

    const title = container.querySelector('.title');
    title.innerHTML = movieData.title;
};

export default editMovieComponent;
