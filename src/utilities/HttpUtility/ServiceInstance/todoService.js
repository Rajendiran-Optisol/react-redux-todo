import axios from 'axios';

export const TodoService = axios.create({
    baseURL: 'http://localhost:1340/api/v1/todos'
});