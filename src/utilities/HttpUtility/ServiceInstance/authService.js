import axios from 'axios';

export const AuthService = axios.create({
    baseURL: 'http://localhost:1340/api/v1/auth'
});