import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import userService from '../services/cardService'

const Card = ({ card }) => {

   const [favorite, setFavorite] = useState(card.favorite === true ? true : false)
   // const []

   useEffect(()=>{      
      if (card.favorite != favorite){
         card.favorite = favorite;
         console.log(mapToViewModel(card));
         userService.editCard(mapToViewModel(card))
      }
   },[favorite])

   const mapToViewModel = (card) => {
      return {
        _id: card._id,
        bizName: card.bizName,
        bizDescription: card.bizDescription,
        bizAddress: card.bizAddress,
        bizPhone: card.bizPhone,
        bizImage: card.bizImage,
        favorite: card.favorite
      };
   }

   return(
      <div className="col-xl-4 col-md-6 p-2 pb-4 ">
      <div className="card shadows">
         <div className="row">
            <div className="col ">
               <img
               className="obj-fit pl-2 pt-2"
               src={card.bizImage}                                      
               alt={card.bizName}
            />
            </div>
            <div className="col d-flex justify-content-end align-items-center h-50 ">            
               <Link to={`/my-cards/edit/${card._id}`}><span className="p-3 pt-1"><i className="far fa-edit"></i></span> </Link>
               <span>|</span>
               <Link  to={`/my-cards/delete/${card._id}`} className="">
               <span className="p-3 pt-1"><i className="fas fa-trash-alt"></i></span>
               </Link>
               <span>|</span>
               <span onClick={() => setFavorite(!favorite)} 
               className="p-3 pt-1"><i className={favorite ? "fas fa-star" : "far fa-star"} ></i></span>                          
            </div>            
         </div>
        
        <div className="card-body ">
          <h5 className="card-title text-center ">{card.bizName}</h5>
          <p className="card-text">{card.bizDescription}</p>
          <p className="card-text border-top pt-2">
            <b>Tel: </b>
            {card.bizPhone}
            <br />
            <b>Adress: </b> {card.bizAddress}
          </p>
          
          
        </div>
      </div>
    </div>
   )
}

export default Card