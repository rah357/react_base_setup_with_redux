import dotenv from "dotenv";
import axios from "axios";

// const url = "https://jsonplaceholder.typicode.com/todos";
// const apiUrl = "https://room-kharcha-backend.herokuapp.com/";

// const url = "https://room-kharcha-backend.herokuapp.com/api/";
const url = "http://localhost:5000/api/";

export const fetchItemList = () => axios.get(`${url}item`);
export const addNewItem = (newPost) => axios.post(`${url}item`, newPost);
export const updatePost = (id, updatedPost) => {
    return axios.patch(`${url}/${id}`, updatedPost);
};
export const fetchPendingSettleList = () =>
    axios.get(`${url}pending-settlement`);

export const deletePost = (id) => {
    return axios.delete(`${url}/${id}`);
};
export const likePost = (id) => {
    return axios.patch(`${url}/${id}/likePost`);
};
