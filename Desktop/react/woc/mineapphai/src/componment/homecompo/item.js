import React from 'react';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./kar";
import '../../App.css';




const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 },
      ];



export default function Items() {
        return (
                <>
                <h1 className= "card">Example to setup your carousel in react</h1>
      <div >
        <Carousel breakPoints={breakPoints}>
          <Item >One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>
      </div>



                </>
        )
}
