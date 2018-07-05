import axios from 'axios';

import {
  URL,
  CLIENT_ID
} from './constants';

const instance = axios.create({
  baseURL: URL,
  headers: {
    'Authorization': `Client-ID ${CLIENT_ID}`
  }
});

export const getAlbum = album => (
  instance.request(
    {
      url: 'gallery/search',
      method: 'GET',
      params: {
        q_exactly: `album: ${album}`
      }
    }
  )
  .then(res => res.data.data)
);