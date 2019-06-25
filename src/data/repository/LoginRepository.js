import axios from 'axios';
import { BASE_URL_DEV } from '../../config/const';

export class LoginRepository{
    constructor() { }

    postLogin(username, password) {
        return axios.post(BASE_URL_DEV + "login",
        {
            "username": username,
            "password": password
        });
    }

}