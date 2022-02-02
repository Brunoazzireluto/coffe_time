import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slide.css'
import {Col, Row } from "antd";
import 'antd/dist/antd.css';
import Card from "./Card";
import Categorie from "./Categorie";
import _  from "lodash";
import api from "../api";
import axios from "axios";

var settings = {
    arrows: true,
    touchMove:true,
    draggable:true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const initialState = {
  items:[],
  categories:[]

}

const config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

const baseURL = 'http://127.0.0.1:5000/api/'

export default class Slide extends Component{

    state = {...initialState}
    
    constructor(props){
      super(props);
      this.NewArray = this.NewArray.bind(this)
    }

    NewArray(id){
      let arr = []
      this.state.items.map((x) =>{
        if(id == x.id_categorie){
          arr.push(x)
        }
      })
      return _.chunk(arr, 2)
    }

    componentWillMount() {
      axios(baseURL+'categorias', config).then(resp =>{
        this.setState({categories:resp.data})
      })
      axios(baseURL+'menu', config).then(resp => {
        this.setState({items:resp.data})
      })
    } 


    Renderslide(){
        return (
            <React.Fragment>
                {this.componentWillMount()}
                {this.state.categories.map((c) =>
                <React.Fragment>
                    <Categorie key={c.id} categorie={c.name} image={c.photo}></Categorie>
                    <Slider {...settings}>
                        {this.NewArray(c.id).map((x) => 
                        <div className="site-card-wrapper" >
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={x.id}>
                                {x.map((item) => 
                                <Col span={12}>
                                    <Card name={item.name} description={item.description} price={item.price} id={item.id} photo={item.photo} ></Card>
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

