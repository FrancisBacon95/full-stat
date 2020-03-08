import axios from 'axios';


const url = 'api/posts/';

export const getPosts = () => {
    return axios.get(url);
  };

class PostService {
    //example getposts
    

    
    //Get Posts
    static get_Posts() {
        return new (async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                (
                    data.map(post => ({
                        ...post,
                    }))
                );
            } catch(err){
                reject(err);
            }
        });
    }
    //Create Post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }
    //Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;