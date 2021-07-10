import http from './httpService'
import {apiUrl} from '../config.json'

export function getCard(cardId) {
   return http.get(`${apiUrl}/cards/${cardId}`);
 }

export function deleteCard(cardId) {
   return http.delete(`${apiUrl}/cards/${cardId}`);
 }

export function editCard(card) {
    const cardId = card._id;
    delete card._id;
    return http.put(`${apiUrl}/cards/${cardId}`, card);
 }

export function getMyCards(){
   return http.get(`${apiUrl}/cards/my-cards`)
}


export async function createCard(card){
   // console.log(card);
   try {
      const data = await http.post(`${apiUrl}/cards`, card)
      return data
   } catch (error) {
      console.log(error);
      return null;
   }

}

export default {createCard, getMyCards, editCard, getCard, deleteCard};