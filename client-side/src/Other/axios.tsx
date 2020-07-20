import axios, { AxiosResponse } from 'axios';

export const axiosClient = axios.create({
  baseURL: "http://localhost:3008",
  //if you don't have the following line, your login won't work
  withCredentials: false, // we should probably change this later
});
