import axios from 'axios';
import { IBlogEntity } from 'models';

axios.defaults.baseURL = 'https://hg6pfn2h1m.execute-api.ap-northeast-2.amazonaws.com/dev';

export const fetchBlogs = (): Promise<IBlogEntity[]> => {
  console.log('fetch blog api called');
  return axios
    .get('/blogs')
    .then(response => {
      return response.data;
    });
}

export const createBlog = () => {
  console.log('create blog api called');
  return axios
    .post('/blogs')
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
