import data from '../src/data.js';

const editMovie = async (id, newMovieData) => {
    try {
        const res = await fetch(`${data.baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newMovieData)
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

export default editMovie;
