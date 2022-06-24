import React from "react";
import "./CardForm.css";
import {nanoid} from "nanoid";



export default function CardForm({ newCard, addNewCard }) {
  
    return (
       
            <form onSubmit={(e)=>{
                e.preventDefault();
                                                
            }}>
            <article className="card" style={{ backgroundColor: newCard }}>
                <input type="text" className="card__input" onChange={(e)=>{
                addNewCard(e.target.value);
                //addNewCard(newCard);
            }}>
            </input>
            <button className="card__button-add">ADD</button>
            </article>
            </form>

        );
  
  }