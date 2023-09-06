import dom from '../dom.js';
import getMovies from '../../apis/getMovies.js';
import createMovie from '../components/createMovie.js';
import sortMovies from '../utils/sortMovies.js';
import createLoader from '../components/createLoader.js'

const loadHandler = async () => {
    const loaderDom = createLoader();
    dom.movies.append(loaderDom);
    const movies = await getMovies();
    if (movies) {
        loaderDom.remove();
        const sortedMovies = sortMovies(movies);
        sortedMovies.forEach((movieData) => {
            const movieDom = createMovie(movieData);
            dom.movies.append(movieDom);
        });
    }
};

export default loadHandler;
