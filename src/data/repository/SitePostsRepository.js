import axios from 'axios';
import { BASE_URL_DEV } from '../../config/const';


export class SitePostsRepository {
    constructor() { }

    getPosts() {
        return axios.get(BASE_URL_DEV + "posts/list");
    }
    getPostDetails(postId) {
        return axios.get(BASE_URL_DEV + "posts/" + postId)
    }

    postComment(postId, commentAuthor, commentBody) {
        return axios.post(BASE_URL_DEV + "posts/" + postId + "/comments",
            {
                "author": commentAuthor,
                "content": commentBody
            });
    }
}

