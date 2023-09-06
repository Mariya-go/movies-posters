import deleteMovie from '../../apis/deleteMovie.js';

const deleteMovieHandler = async (id) => {
    document.getElementById(id).remove();
    const deleteMovieData = await deleteMovie(id);
};

export default deleteMovieHandler;
