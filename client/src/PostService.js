import axios from 'axios';


const url = 'api/posts/';

export const getPosts = () => {
    return axios.get(url);
  };
