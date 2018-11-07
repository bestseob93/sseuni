import axios from 'axios';

axios.defaults.baseURL = 'https://hg6pfn2h1m.execute-api.ap-northeast-2.amazonaws.com/dev';

export function fetchBlogs() {
  console.log('fetch blog api called');
  return axios
    .get('/blogs')
    .then(response => {
      return response.data;
    });
}

export function createBlog() {
  console.log('create blog api called');
  return axios
    .post('/blogs')
    .then(response => {
      return response.data;
    });
}

export function fetchBlogById(id: string) {
  console.log('fetch blog by id api called');
  return axios
    .get(`/blog/${id}`)
    .then(response => {
      return response.data;
    });
}

export function updateBlog(id: string) {
  console.log('update blog api called');
  return axios
    .put(`/blog/${id}`)
    .then(response => {
      return response.data;
    });
}

export function deleteBlog(id: string) {
  console.log('delete blog api called');
  return axios
    .delete(`/blog/${id}`)
    .then(response => {
      return response.data;
    });
}