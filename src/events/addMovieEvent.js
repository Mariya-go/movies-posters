import dom from '../dom.js';
import addMovieHandler from '../handlers/addMovieHandler.js'

const addMovieEvent = () => {
    dom.btn.addEventListener('click', addMovieHandler);
};

export default addMovieEvent;
