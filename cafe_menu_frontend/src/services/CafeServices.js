import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/cafes'

export const listCafes = () => axios.get(REST_API_BASE_URL);

export const addCafe = (cafe) => axios.post(REST_API_BASE_URL, cafe);

export const updateCafe = (cafeId, cafe) => axios.put(REST_API_BASE_URL+ "/" + cafeId, cafe);

export const getCafeById = (cafeId) => axios.get(REST_API_BASE_URL + "/"+ cafeId);

export const deleteCafe = (cafeId) => axios.delete(REST_API_BASE_URL+ '/' + cafeId);