import React from "react";
import "./CardForm.css";
import {nanoid} from "nanoid";



export default function CardForm({ colorObjects, addNewCard }) {
  
    return (
       
            <form onSubmit={(e)=>{
                e.preventDefault();

                const inputValue = e.target.elements[0].value;
                const colorStyle = e.target.children[0].style.backgroundColor = inputValue;
                console.log(colorStyle)
            }}>
            <article className="card" >
                <input type="text" className="card__input" onChange={(e)=>{
                const newCard = {id:nanoid(),colorCode:e.target.value}
                console.info();
                //addNewCard(newCard);
            }}>
            </input>
            <button className="card__button-add">ADD</button>
            </article>
            </form>

        );
  
  }