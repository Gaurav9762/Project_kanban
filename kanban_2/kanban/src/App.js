import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./Components/Board/Board";
import Editable from "./Components/Editable/Editable";
import ReactModal from 'react-modal';
import { X } from "react-feather";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // useEffect(()=>{
  //  console.log("effect")
  // })
  const [boards, setBoards] = useState(JSON.parse(localStorage.getItem('data')),[
    // {
    //   id: Date.now() + Math.random() * 2,
    //   title: "To Do",
    //   cards: [
    //     {
    //       id: Date.now() + Math.random(),
    //       title: "Card 1",
    //       tasks: [],
    //       labels: [
    //         {
    //           text: "task",
    //           color: "blue",
    //         },
    //       ],
    //       desc: "asdasd",
    //       date: "",
    //     },
    //     {
    //       id: Date.now() + Math.random(),
    //       title: "Card 2",
    //       tasks: [],
    //       labels: [
    //         {
    //           text: "work",
    //           color: "yellow",
    //         },
    //       ],
    //       desc: "iuqwiknjdkw",
    //       date: "",
    //     },
    //   ],
    // },
    // {
    //   id: Date.now() + Math.random() * 2,
    //   title: "To Do",
    //   cards: [
    //     {
    //       id: Date.now() + Math.random(),
    //       title: "Card 1",
    //       tasks: [],
    //       labels: [
    //         {
    //           text: "task",
    //           color: "blue",
    //         },
    //       ],
    //       desc: "asdasd",
    //       date: "",
    //     },
    //     {
    //       id: Date.now() + Math.random(),
    //       title: "Card 2",
    //       tasks: [],
    //       labels: [
    //         {
    //           text: "work",
    //           color: "yellow",
    //         },
    //       ],
    //       desc: "iuqwiknjdkw",
    //       date: "",
    //     },
    //   ],
    // },
  ]);

  const [target, setTarget] = useState({
    cid: "",
    bid: "",
  });

  const addCard = (title, bid) => {
    const card = {
      id: "ID: "+(Date.now() + Math.random()),
      // id:Math.random().toString(16).slice(2),
      title,
      labels: [],
      tasks: [],
      date: "",
      desc: "",
      env: ""
    };
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;
    const tempBoards = [...boards];
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);
  };
  const removeCard = (cid, bid) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;

    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;

    const tempBoards = [...boards];
    tempBoards[bIndex].cards.splice(cIndex, 1);
    setBoards(tempBoards);
  };

  const addBoard = (title) => {
    setBoards([
      ...boards,
      {
        id: Date.now() + Math.random(),
        title,
        cards: [],
      },
    ]);
  };

  const removeBoard = (bid) => {
    const tempBoards = boards.filter((item) => item.id !== bid);
    setBoards(tempBoards);
  };

  const handleDragEnter = (cid, bid) => {
    setTarget({
      cid,
      bid,
    });
  };
  const handleDragEnd = (cid, bid) => {
    let source_bIndex, source_cIndex, target_bIndex, target_cIndex;

    source_bIndex = boards.findIndex((item) => item.id === bid);
    if (source_bIndex < 0) return;

    source_cIndex = boards[source_bIndex].cards?.findIndex(
      (item) => item.id === cid
    );
    if (source_cIndex < 0) return;

    target_bIndex = boards.findIndex((item) => item.id === target.bid);
    if (target_bIndex < 0) return;

    console.log("outside")
    target_cIndex = boards[target_bIndex].cards?.findIndex(
      (item) => item.id === target.cid
    );
    if (target_cIndex < 0) return;

    const tempBoards = [...boards];
    const tempCard = tempBoards[source_bIndex].cards[source_cIndex];

    tempBoards[source_bIndex].cards.splice(source_cIndex, 1);
    tempBoards[target_bIndex].cards.splice(target_cIndex, 0, tempCard);

    setBoards(tempBoards);
  };

  const updateCard= (cid, bid,card) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0) return;

    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0) return;

    const tempBoards = [...boards];
    tempBoards[bid].cards[cid]=card;
    setBoards(tempBoards);
  }

  localStorage.setItem('data',JSON.stringify(boards))
  const temp = localStorage.getItem('data');
  console.log("local storage data =",temp);

  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
  
    
    <div className="main_div">
      <div className="app">
        <div className="app_navbar">
          <h2>Codeium - kanban</h2>
        </div>
        <div className="app_outer">
          <div className="app_boards">
            {boards.map((item) => (
              <Board
                key={item.id}
                board={item}
                removeBoard={removeBoard}
                removeCard={removeCard}
                addCard={addCard}
                handleDragEnd={handleDragEnd}
                handleDragEnter={handleDragEnter}
              />
            ))}

            {/* <div>
              <button onClick={setIsOpen}>Open Modal</button>
              <ReactModal isOpen={isOpen} contentLabel="Example Modal">
                This is the content of the modal.
                <button onClick={e => setIsOpen(!isOpen)}>close</button>
              </ReactModal>
            </div> */}
            {/* <Board text="To Do" />
          <Board text="In Progress" />
          <Board text="Finished" />
          <Board text="Extra" /> */}

              <div className="app_boards_board">
                <Editable
                  displayClass="app_boards_board_add"
                  text="+"
                  placeholder="Enter Board title"
                  onSubmit={(value) => addBoard(value)}
                />
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
