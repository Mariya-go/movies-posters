import dom from '../dom.js';
import addMovie from '../../apis/addMovie.js';
import movieCreator from '../components/createMovie.js';
import editMovieComponent from '../components/editMovieComponent.js';
import editMovie from '../../apis/editMovie.js';

const addMovieHandler = async (e) => {
    e.preventDefault;

    const newMovieData = {
        title: dom.movieTitle.value,
        src: dom.movieSrc.value
    };

    if (newMovieData.title === '' || newMovieData.src === '') {
        return;
    }

    if (dom.button.innerText === 'Add movie') {
        const newMovieDom = movieCreator(newMovieData);

        dom.movies.prepend(newMovieDom);

        await addMovie(newMovieData);

        dom.movieTitle.value = '';
        dom.movieSrc.value = '';
    } else {
        const container = document.querySelector('.selected');
        const id = Number(container.id);
        const newMovieDom = editMovieComponent(newMovieData);
        await editMovie(id, newMovieData);

        // remove class and inputs
        container.classList.remove('selected');
        dom.movieTitle.value = '';
        dom.movieSrc.value = '';
        dom.button.innerHTML = 'Add movie';
    }
};

export default addMovieHandler;
