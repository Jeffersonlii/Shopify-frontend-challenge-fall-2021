import { apiURL } from '../../env';
import axios from 'axios';

export const getMovie = (searchTerm) => {
    return axios.get(`${apiURL}&s=${searchTerm}&type=movie`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
