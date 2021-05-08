import { apiURL } from '../env';
import axios from 'axios';

export const getMovieById = (id) => {
    return axios.get(`${apiURL}&i=${id}&type=movie`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
