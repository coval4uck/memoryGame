import "./Card.css";
import imgCardFront from "../../../../img/Card-front.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkCards } from "../../../../redux-toolkit/slices/memorySlice";

const Card = (props) => {
  const dispatch = useDispatch();

  const onChange = () => {
    dispatch(checkCards({ id: props.id, name: props.name }));
  };
  return (
    <div
      onClick={onChange}
      className={`Card ${props.successful ? "successful" : null}`}>
      <div className="card-back">
        <img src={props.img} alt="" />
      </div>
      <div className="card-front">
        <img src={imgCardFront} alt="" />
      </div>
    </div>
  );
};

export default Card;
