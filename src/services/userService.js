import http from "./httpService";
import { apiUrl } from "../config.json";
import jwt_decode from "jwt-decode";
 
const tokenKey = "token";

export function getJwt() {
   try {    
      return localStorage.getItem(tokenKey)
   } catch (err) {
      return null
   }
 }

export function getCurrentUser(){
   try {
      const jwt = localStorage.getItem(tokenKey)
      // console.log('getCurrentUser', jwt_decode(jwt));
      return jwt_decode(jwt)
   } catch (err) {
      return null
   }
}

export function logout(){
   localStorage.removeItem(tokenKey)
}

export async function login(email, password) {
   const { data } = await http.post(`${apiUrl}/maketoken`, { email, password });
   localStorage.setItem(tokenKey, data);
   // console.log(data);
}

export async function getDataUser() {
   const { data } = await http.get(`${apiUrl}/users/me`);
   // console.log(data);
   return data
}


const userService = {login, getCurrentUser, logout, getJwt, getDataUser}

export default userService;

