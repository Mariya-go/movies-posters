import addMovieHandler from '../handlers/addButtonHandler.js';
import dom from '../dom.js';

const addButtonEvent = () => {
    dom.button.addEventListener('click', addMovieHandler);
};

export default addButtonEvent;
