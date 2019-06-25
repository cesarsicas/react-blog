import axios from 'axios';
import { BASE_URL_DEV } from '../../config/const';


export class AdminPostsRepository {
    constructor() { }

    getPosts(token) {
        return axios.get(BASE_URL_DEV + "admin/posts", { headers: { Authorization: "Bearer " + token } });
    }
    getPostDetails(token, postId) {
        return axios.get(BASE_URL_DEV + "admin/posts/" + postId, { headers: { Authorization: "Bearer " + token } })
    }    
}

