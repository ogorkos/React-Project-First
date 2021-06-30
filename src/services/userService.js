import http from "./httpService";
import { apiUrl } from "../config.json";
 
const tokenKey = "token";
 
export async function login(email, password) {
   const { data } = await http.post(`${apiUrl}/maketoken`, { email, password });
   localStorage.setItem(tokenKey, data);
}
 
export default {
  login
};