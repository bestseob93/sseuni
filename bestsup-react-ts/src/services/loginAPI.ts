import axios, { AxiosPromise } from 'axios';

export const requestLogin = (loginInfo: any): Promise<AxiosPromise> => {
  return axios
    .post('/login', loginInfo)
    .then(response => {
      console.log(response);
      return response.data;
    }).catch((err) => {
      console.log(err);
      if (err) {
        throw new Error(`fetcinh blogs got ${err}`);
      }
    });
}
