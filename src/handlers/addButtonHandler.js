import dom from '../dom.js';
import data from '../data.js';
import addMovie from '../../apis/addMovie.js';
import movieCreator from '../components/createMovie.js';
import editMovieComponent from '../components/editMovieComponent.js';
import editMovie from '../../apis/editMovie.js';

const addMovieHandler = async (e) => {
    e.preventDefault;

    if (dom.movieTitle.value === '' || dom.movieSrc.value === '') {
        return;
    }

    if (dom.button.innerText === 'Add movie') {
        const newMovieDataAdd = {
            title: dom.movieTitle.value,
            src: dom.movieSrc.value,
            id: data.id
        };

        const newMovieDom = movieCreator(newMovieDataAdd);

        dom.movies.prepend(newMovieDom);

        await addMovie(newMovieDataAdd);

        dom.movieTitle.value = '';
        dom.movieSrc.value = '';
        debugger;

        data.id++;
    } else {
        const newMovieDataEdit = {
            title: dom.movieTitle.value,
            src: dom.movieSrc.value
        };
        const container = document.querySelector('.selected');
        const id = Number(container.id);
        editMovieComponent(newMovieDataEdit);
        await editMovie(id, newMovieDataEdit);

        // remove class and inputs
        container.classList.remove('selected');
        dom.movieTitle.value = '';
        dom.movieSrc.value = '';
        dom.button.innerHTML = 'Add movie';
    }
};

export default addMovieHandler;
