import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Card.css";
import { CheckSquare, Clock, Delete, MoreHorizontal } from "react-feather";
import Chip from "../Chip/Chip";
import Dropdown from "../Dropdown/Dropdown";
import ModalComp from "../Modal/ModalComp";
import CardInfo from "./SubCard/CardInfo";

// import Editable from '../Editable/Editable'
function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setModal] = useState(false);
  const cardInfo = props.card
  return (
    <div
      className="card"
      draggable
      onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
      onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
    >
      {showModal && (
        <CardInfo
          onClose={() => {
            setModal(false);
          }}

          cardInfo={cardInfo}
        ></CardInfo>
      )}

      <div className="card_top">
        <div className="card_top_lables">
          {/* {
              props.card?.labels?.map((item,index)=><Chip key={index} text ={item.text} color={item.color}></Chip>)
            } */}

          {/* <Chip close text="Task" color="orange"></Chip> */}
        </div>
        <div className="card_top_more" onClick={() => setShowDropdown(true)}>
          {/* <MoreHorizontal></MoreHorizontal> */}
          <Delete
            onClick={() => props.removeCard(props.card?.id, props?.boardId)}
          >
          </Delete>
          
        </div>
      </div>
      <div className="card_title">{props.card.title}</div>
      <div className="card_footer">
        <p
          onClick={() => {
            setModal(true);
          }}
        >
          {props.card.id}
        </p>
      </div>
    </div>
  );
}

export default Card;
