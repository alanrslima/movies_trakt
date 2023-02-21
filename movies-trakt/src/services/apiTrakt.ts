import axios from 'axios';
import {keys} from '../config/keys';

export const apiTrakt = axios.create({
  baseURL: 'https://api.trakt.tv',
  headers: {
    'Content-type': 'application/json',
    'trakt-api-version': 2,
    'trakt-api-key': keys.API_KEY_TRAKT,
  },
});
