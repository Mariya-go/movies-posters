import deleteMovieHandler from '../handlers/deleteButtonHandler.js';

import addMovieHandler from '../handlers/addButtonHandler.js';
import dom from '../dom.js';

const movieCreator = (movieData) => {
    const movieImg = document.createElement('div');
    movieImg.classList.add('image-box');
    movieImg.id = movieData.id;

    const image = document.createElement('img');
    image.src = movieData.src;
    image.alt = movieData.title;
    image.classList.add('image');

    let title = document.createElement('h6');
    title.innerText = movieData.title;
    title.classList.add('title');

    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-info');
    editButton.innerText = 'Edit';

    const id = Number(movieImg.id);

    // add event to edit btn

    editButton.addEventListener('click', () => {
        // debugger;
        dom.button.innerHTML = 'Edit movie';
        movieImg.classList.add('selected');
        dom.movieTitle.value = movieData.title;
        dom.movieSrc.value = movieData.src;

        addMovieHandler();
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.innerText = 'Delete';

    // add event to delete btn

    deleteButton.addEventListener('click', () => {
        deleteMovieHandler(id);
    });

    movieImg.append(image, title, editButton, deleteButton);
    return movieImg;
};

export default movieCreator;
