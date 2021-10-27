import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slide.css'
import {Col, Row } from "antd";
import 'antd/dist/antd.css';
import Card from "./Card";
import Categorie from "./Categorie";
import _, { defaultTo } from "lodash";

var settings = {
    arrows: true,
    touchMove:true,
    draggable:true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

let items = [
    {
      id: 1,
      name: "Algum nome",
      description: "alguma descrição",
      price: 2.5
    },
    {
      id: 2,
      name: "Algum nome",
      description: "alguma descrição",
      price: 20.5
    },
    {
      id: 3,
      name: "Algum nome",
      description: "alguma descrição",
      price: 5.89
    },
    {
      id: 4,
      name: "Algum nome",
      description: "alguma descrição",
      price: 5.9
    }
  ];

const list = _.chunk(items, 2);

export default class Slide extends Component{


    RenderSlider(){
        return (
            <Slider {...settings}>
                {this.RenderRow()}
            </Slider>
        )
    }

    printar(){
        return console.log(list)
    }

    RenderRow(){
        for(let i = 0; i<list.length; i++){
            return(
                <div className="site-card-wrapper">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {this.RenderRows()}
                    </Row>
                </div>
            )
        }

    }

    RenderRows(){
        let arr = []
        Object.keys(list).forEach(function(key) {
            arr.push(list[key])
        })
        return (
            arr.map(item => 
                <React.Fragment>
                    <Col span={12}>
                        <Card name={item.name} description={item.description} price={item.price}></Card>
                    </Col>
                </React.Fragment>)
        )
}


    /* for (i in list[array]){
        return (
            <Col span={12}>
                <Card name={list[array][i].name} description={list[array][i].description} 
                price={list[array][i].price}></Card>
            </Col>
        )
    } */

    render() {
        return(
            <React.Fragment>
                <Categorie categorie='Café' />
                {this.RenderSlider()}
            </React.Fragment>
        )
    }
}
