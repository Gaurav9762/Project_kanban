import React, { useState } from "react";
import "./Board.css";
import { Delete, MoreHorizontal } from "react-feather";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

function Board(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          {props.board?.title} <span>{`${props.board?.cards?.length}`}</span>
        </p>

        <div className="board_top_more" onClick={() => setShowDropdown(true)}>
          <Delete onClick={() => props.removeBoard(props.board?.id)}>
            Delete Board
          </Delete>

          {/* <MoreHorizontal></MoreHorizontal> */}
          {/* <p onClick={()=>props.removeBoard(props.board?.id)}>Delete Board</p> */}
          {/* {
                  showDropdown && (
                  <Dropdown onClose = {()=>setShowDropdown(false)} >
                        <div className="board_dropdown">
                            <p onClick={()=>props.removeBoard(props.board?.id)}>Delete Board</p>
                        </div>
                  </Dropdown>)} */}
        </div>
      </div>
      <div className="board_cards">
        {props.board?.cards.map((item) => (
          <Card
            key={item.id}
            card={item}
            removeCard={props.removeCard}
            boardId={props.board?.id}
            handleDragEnd={props.handleDragEnd}
            handleDragEnter={props.handleDragEnter}
          ></Card>
        ))}

        <Editable
          displayCLass="board_cards_add"
          text="+"
          placeholder="Enter Card Title"
          onSubmit={(value) => props.addCard(value, props.board?.id)}
        ></Editable>
      </div>
    </div>
  );
}

export default Board;
