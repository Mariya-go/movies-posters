import dom from '../dom.js';
import movieCreator from '../components/createMovie.js';
import getMovies from '../../apis/getMovies.js';
import sorter from '../utils/sorter.js';
import loadComponent from '../components/loadComponent.js';

const loadHandler = async () => {
    // loader

    const loadDom = loadComponent();
    dom.movies.append(loadDom);

    // get movies
    const movies = await getMovies();

    // create movies list
    if (movies) {
        loadDom.remove();
        const sortedMovies = sorter(movies);
        sortedMovies.forEach((movieData) => {
            const movieDom = movieCreator(movieData);
            dom.movies.append(movieDom);
        });
    }
};

export default loadHandler;
