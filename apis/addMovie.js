import data from '../src/data.js';

const addMovie = async (movieData) => {
    try {
        const res = await fetch(data.baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(movieData)
        });
        if (!res.ok) {
            throw new Error(
                `Failed to fetch movies with status: ${res.status}`
            );
        }
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default addMovie;
