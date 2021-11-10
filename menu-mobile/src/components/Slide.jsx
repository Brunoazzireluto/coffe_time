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
      name: "café 1",
      description: "alguma descrição",
      price: 2.5,
      categorie: 1
    },
    {
      id: 2,
      name: "Sobremesa 1",
      description: "alguma descrição",
      price: 20.5,
      categorie: 2
    },
    {
      id: 3,
      name: "sobremesa 2",
      description: "alguma descrição",
      price: 5.89,
      categorie: 2
    },
    {
      id: 4,
      name: "Café 2",
      description: "alguma descrição",
      price: 5.9,
      categorie: 1
    },
    {
      id: 5,
      name: "Café 3",
      description: "alguma descrição",
      price: 10.90,
      categorie: 1
    },
    {
      id: 6,
      name: "Sobremesa 3",
      description: "alguma descrição",
      price: 10.90,
      categorie: 2
    },
    {
      id: 7,
      name: "Bolo 1",
      description: "alguma descrição",
      price: 5.9,
      categorie: 3
    },
    {
      id: 8,
      name: "Bolo 2",
      description: "alguma descrição",
      price: 10.90,
      categorie: 3
    },
    {
        id:9,
        name:'Cafe 4',
        description:'FUNCIONAAAA',
        price:100,
        categorie:1
    }
  ];

let categories = [ 
    {
        id: 1,
        categorie:'Café',
        image: 'https://cdn-icons-png.flaticon.com/512/1046/1046887.png'
    },
    {
        id: 2,
        categorie:'Sobremesa',
        image: 'https://cdn-icons-png.flaticon.com/512/1047/1047813.png'
    },
    {
        id:3,
        categorie:'Bolos',
        image:'https://cdn-icons-png.flaticon.com/512/540/540304.png'
    }
]

const list = _.chunk(items, 2);

export default class Slide extends Component{

    NewArray(cat){
        let arr = []
        Object.keys(items).forEach(function(key){
            if(cat === items[key].categorie){
                arr.push(items[key])
            }
        })
        return _.chunk(arr, 2)
    }



    Renderslide(){
        return (
            <React.Fragment>
                {categories.map((c) =>
                <React.Fragment>
                    <Categorie key={c.id} categorie={c.categorie} image={c.image}></Categorie>
                    <Slider {...settings}>
                        {this.NewArray(c.id).map((x) => 
                        <div className="site-card-wrapper">
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={x.id}>
                                {x.map((item) => 
                                <Col span={12}>
                                    <Card name={item.name} description={item.description} price={item.price} id={item.id}></Card>
                                </Col>
                                )}
                            </Row>
                        </div>
                        )}
                    </Slider>
                </React.Fragment>
                )}
            </React.Fragment>
        )
    }

    render() {
        return this.Renderslide()
    }
}

