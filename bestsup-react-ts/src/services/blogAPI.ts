import axios, { AxiosPromise } from 'axios';

axios.defaults.baseURL = 'https://hg6pfn2h1m.execute-api.ap-northeast-2.amazonaws.com/dev';
axios.defaults.headers.post['Authorization'] = '3';

export const fetchBlogs = (): Promise<AxiosPromise> => {
  console.log('fetch blog api called');
  return axios
    .get('/blogs')
    .then(response => {
      return response.data;
    }).catch((err) => {
      if (err) {
        throw new Error(err);
      }
    });
}

export const createBlog = (): Promise<AxiosPromise> => {
  console.log('create blog api called');
  return axios
    .post('/blog')
    .then(response => {
      return response.data;
    });
}

export const fetchBlogById = (id: string) => {
  console.log('fetch blog by id api called');
  return axios
    .get(`/blog/${id}`)
    .then(response => {
      return response.data;
    });
}

export const updateBlog = (id: string) => {
  console.log('update blog api called');
  return axios
    .put(`/blog/${id}`)
    .then(response => {
      return response.data;
    });
}

export const deleteBlog = (id: string) => {
  console.log('delete blog api called');
  return axios
    .delete(`/blog/${id}`)
    .then(response => {
      return response.data;
    });
}
