import dom from '../dom.js';
import addMovie from '../../apis/addMovie.js';
import movieCreator from '../components/createMovie.js';
import editMovieComponent from '../components/editMovieComponent.js';
import editMovie from '../../apis/editMovie.js';

const addMovieHandler = async (e) => {
    e.preventDefault();

    const newMovieData = {
        title: dom.movieTitle.value,
        src: dom.movieSrc.value
    };

    if (newMovieData.title === '' || newMovieData.src === '') {
        return;
    }

    if (dom.button.innerText === 'Add movie') {
        const newMovie = await addMovie(newMovieData);

        const newMovieDom = movieCreator(newMovieData);

        dom.movies.prepend(newMovieDom);
    } else {
        const container = document.querySelector('.selected');
        const id = Number(container.id);
        const newMovieDom = editMovieComponent(newMovieData);
        const movieEdit = await editMovie(id, newMovieData);
        // editButtonHandler(id, newMovieData);

        newMovieDom.classList.remove('selected');
        dom.movieTitle.placeholder = 'Edit movie title';
        dom.movieSrc.placeholder = 'Edit movie src';
    }
};

export default addMovieHandler;
