import data from '../src/data.js';

const getMovieById = async (id) => {
    try {
        const res = await fetch(`${data.baseUrl}/${id}`);
        if (!res.ok) {
            throw new Error(
                `Failed to fetch movies with status : ${res.status}`
            );
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default getMovieById;
