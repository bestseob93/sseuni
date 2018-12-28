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
        throw new Error(`fetcinh blogs got ${err}`);
      }
    });
}

export const createBlog = (payload: any): any => {
  const { title, previewContent, content, attachment } = payload;
  console.log('create blog api called');
  return axios
    .post('/blog', {
      title,
      previewContent,
      content,
      attachment,
    })
    .then(response => {
      return response.data;
    }).catch((err) => {
      if (err) {
        console.log(':::::::::');
        console.error(err.response);
      }
    });
}

export const fetchBlogById = (id: string): Promise<AxiosPromise> => {
  console.log('fetch blog by id api called');
  console.log(id);
  return axios
    .get(`/blog/${id}`)
    .then(response => {
      return response.data;
    }).catch((err) => {
      if (err) {
        throw new Error(`Fetching BlogById got ${err}`);
      }
    })
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
