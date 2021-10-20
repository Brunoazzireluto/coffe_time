import React, {Component} from "react";
import './Menu.css';
import Card from "../components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


export default class Menu extends Component{
    


    render() {
        return (
            <div>
                <h1 className='title' >Cardápio</h1>
                
                <Slider {...settings}>
                    <div>
                        <Card></Card>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>

            </div>
        )
    }

}