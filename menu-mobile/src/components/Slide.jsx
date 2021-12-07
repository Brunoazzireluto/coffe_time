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


const baseURL = 'http://127.0.0.1:5000/'

export default class Slide extends Component{

    state = {...initialState}
    
    constructor(props){
      super(props);
      this.NewArray = this.NewArray.bind(this)
    }

    NewArray(id){
      let arr = []
      this.state.items.map((x) =>{
        if(id == x.categorie){
          arr.push(x)
        }
      })
      return _.chunk(arr, 2)
    }

    componentWillMount() {
      axios(baseURL+'categorias').then(resp => {
        this.setState({categories:resp.data})
      })
      axios(baseURL+'menu').then(resp => {
        this.setState({items:resp.data})
      })
    } 

    componentWillMountItems(){
      axios(baseURL+'menu').then(resp => {
        // this.setState({items:resp.data})
        console.log(resp.data)
      })
    }

    Renderslide(){
        return (
            <React.Fragment>
                {this.componentWillMount()}
                {this.state.categories.map((c) =>
                <React.Fragment>
                    <Categorie key={c.id} categorie={c.categorie} image={c.image}></Categorie>
                    <Slider {...settings}>
                        {this.NewArray(c.id).map((x) => 
                        <div className="site-card-wrapper" >
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} key={x.id}>
                                {x.map((item) => 
                                <Col span={12}>
                                    <Card name={item.name} description={item.description} price={item.price} id={item.id}></Card>
                                </Col>
                                )}
                            </Row>
                            {this.componentWillMount()}
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

