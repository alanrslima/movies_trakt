import axios from 'axios';
import env from '~/config/env';

export const apiTrakt = axios.create({
    baseURL: 'https://api.trakt.tv',
    headers: {
        'Content-type': 'application/json',
        'trakt-api-version': 2,
        'trakt-api-key': env.API_KEY_TRAKT,
    },
});


export const apiTmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    headers: {
        'Content-type': 'application/json',
    },
});
