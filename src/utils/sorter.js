const sorter = (posters) => {
    return posters.sort((a, b) => b.id - a.id);
};

export default sorter;
