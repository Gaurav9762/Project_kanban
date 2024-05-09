import React from "react";
import ModalComp from "../../Modal/ModalComp";
import "./CardInfo.css";
import Editable from "../../Editable/Editable";
import TextAreaComp from "../../TextAreaForComps/TextAreaComp";

function CardInfo(props) {
  console.log("cardinfo", props);
  return (
    <ModalComp onClose={() => props.onClose()}>
      <div className="cardinfo">
        <div className="card_box">
          <div className="card_pop_title">
            <h3>
              <u>Title: </u>{" "}
            </h3>{" "}
            {props.cardInfo.title}
            <br />
            <h3>
              <b>{props.cardInfo.id}</b>
            </h3>
          </div>
          <div className="card_box_edit">
            <Editable text={"Add/Edit"} placeholder="Enter Title">
              Card Pop up Modal
            </Editable>
          </div>
        </div>
        <div className="card_box">
          <div className="card_pop_title">
            <h3>
              <u>Description: </u>{" "}
            </h3>{" "}
            {/* {props.cardInfo.title} */}
            <br />
            {/* <h3>
              <b>{props.cardInfo.id}</b>
            </h3> */}
          </div>
          <div className="card_box_edit">
            {/* <Editable text={"Add/Edit"} placeholder="Enter Description" descriptionFromModal="modal">
              
            </Editable> */}
            <TextAreaComp
              text={"Add/Edit"}
              placeholder="Enter Description"
              
            ></TextAreaComp>
          </div>
        </div>
      </div>
    </ModalComp>
  );
}

export default CardInfo;
