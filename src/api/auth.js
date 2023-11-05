import axios from './axios'


export const registerRequest = (user) => axios.post(`/auth/signup`, user);
export const LoginRequest = (user) => axios.post(`/auth/signin`, user);

export const verifyTokenRequet = () => axios.get(`/auth/verify/`)