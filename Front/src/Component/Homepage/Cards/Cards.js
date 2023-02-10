import React from "react";
import Carousel from "react-elastic-carousel";
import CardsItem from "./CardsItem";
import { cards } from "../../Data/Data";
import "./cards.css";

const   Data = cards.map((data) => (
    <CardsItem button={data.text} issue={data.issue} hours={data.hours} skills={data.Skills}>
    </CardsItem>
));

const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
  ];
  
const Cards = () => {
    return (
        <>
        <div className="CardContainer">
        <Carousel 
          breakPoints={breakPoints}>
              {Data}
          </Carousel>
        </div>
        </>
    )
};

export default Cards;