import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.trakt.tv',
    headers: {
        'Content-type': 'application/json',
        'trakt-api-version': 2,
        'trakt-api-key': 'dfa55a27c6a61b258356b9513e6e97dfb58eb121c5c81493cff4a780614950bd',
    },
});

export default api;