import axios, { AxiosPromise } from 'axios';

export const requestLogin = (): Promise<AxiosPromise> => {
  return axios
    .get('/login')
    .then(response => {
      return response.data;
    }).catch((err) => {
      if (err) {
        throw new Error(`fetcinh blogs got ${err}`);
      }
    });
}
