import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slide.css'
import {Col, Row } from "antd";
import 'antd/dist/antd.css';
import './Cols.css';
import Card from "./Card";

var settings = {
    arrows: true,
    touchMove:true,
    draggable:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };



export default props => 
    <Slider {...settings}>
        <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={12}>
                <Card name='Café 1' description='Algum café 1' price='5,90'></Card>
            </Col>
            <Col span={12}>
                    <Card name='Café 2' description='Algum café 2' price='3,00' ></Card>    
                </Col>
            </Row>
        </div>
        <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={12}>
                <Card name='Café 1' description='Algum café 1' price='5,90'></Card>
            </Col>
            <Col span={12}>
                    <Card name='Café 2' description='Algum café 2' price='3,00' ></Card>    
                </Col>
            </Row>
        </div>
    </Slider>