const loadComponent = () => {
    const loadContainer = document.createElement('div');
    loadContainer.classList.add('ring');

    const span = document.createElement('span');
    loadContainer.append(span);

    return loadContainer;
};

export default loadComponent;
