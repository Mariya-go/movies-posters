import loadHandler from '../handlers/loadHandler.js';
const loadEvent = () => {
    window.addEventListener('load', (e) => {
        loadHandler(e);
    });
};

export default loadEvent;
