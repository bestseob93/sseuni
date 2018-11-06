import axios from 'axios';

export function fetchBlogs() {
  console.log('fetch blog api called');
  return axios
    .get('https://picsum.photos/list')
    .then(response => {
      return response.data;
    });
}

export function createBlog() {
  console.log('create blog api called');
  return axios
    .get('https://picsum.photos/list')
    .then(response => {
      return response.data;
    });
}

export function fetchBlogById() {
  console.log('fetch blog by id api called');
  return axios
    .get('https://picsum.photos/list')
    .then(response => {
      return response.data;
    });
}

export function updateBlog() {
  console.log('update blog api called');
  return axios
    .get('https://picsum.photos/list')
    .then(response => {
      return response.data;
    });
}

export function deleteBlog() {
  console.log('delete blog api called');
  return axios
    .get('https://picsum.photos/list')
    .then(response => {
      return response.data;
    });
}