import React, {Component, useEffect, useState} from "react";
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


const Slide = () => {
    var settings = {
        arrows: true,
        touchMove:true,
        draggable:true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    };
      
    const baseURL = 'http://127.0.0.1:5000/api/'

    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);

    // const fetchData = async () =>{
    //     try{
    //         const { data: response } = await axios.get(baseURL+'categorias', config);
    //         setData(response);
    //     }catch (error){
    //         console.error(error.message)
    //     }
    // }

    const fetchDataCategories = () => {
        axios.get(baseURL+'categorias', config).then((resp) =>{
            setCategories(resp.data)
        })
    }

    const fetchDataItems = () => {
        axios.get(baseURL+'menu', config).then((resp) =>{
            setItems(resp.data)
        })
    }

    useEffect(() => {
        fetchDataCategories();
        fetchDataItems();
    }, []);

    function NewArray(id){
        let arr = []
        items.map((x) =>{
          if(id == x.id_categorie){
            arr.push(x)
          }
        })
        return _.chunk(arr, 2)
    }

    

    return (
        <React.Fragment>
              {categories.map((cat) =>
                <React.Fragment>
                    <Categorie key={cat.id} categorie={cat.name} image={cat.photo}></Categorie>
                    {<Slider {...settings}>
                      {NewArray(cat.id).map((x) => 
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
                      </Slider>}
                </React.Fragment>
              )}
      </React.Fragment>
    )
}

export default Slide;