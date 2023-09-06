import dom from '../dom.js';
import addMovie from '../../apis/addMovie.js';
import updateMovie from '../../apis/updateMovie.js';
import createMovie from '../components/createMovie.js';
import updateMovieDom from '../components/updateMovieDom.js';

const addMovieHandler = async (e) => {
    e.preventDefault();

    const newMovie = {
        title: dom.titleInput.value,
        src: dom.sourceInput.value,
        year: dom.year.value
    };

    // make sure year exist
    if (!newMovie.year) {
        newMovie.year = '2023';
    }

    // Check if title and source exist
    if (!newMovie.title || !newMovie.src) {
        dom.error.innerText = 'Please add both movie title and source';
        dom.error.classList.add('err');
        return;
    }

    // remove error message if exist
    dom.error.innerText = '';
    dom.error.classList.remove('err');
    if (dom.btn.innerText === 'Add movie') {
        const movieDom = createMovie(newMovie);
        dom.movies.prepend(movieDom);
        const movieAdd = await addMovie(newMovie);
    } else {
        const movieDom = document.querySelector('.selected');
        updateMovieDom(movieDom, newMovie);
        const id = Number(movieDom.id);
        await updateMovie(id, newMovie);
        movieDom.classList.remove('selected');
        dom.btn.innerText = 'Add Movie';
    }

    // reset inputs
    dom.titleInput.value = '';
    dom.sourceInput.value = '';
    dom.year.value = '';
};

export default addMovieHandler;
