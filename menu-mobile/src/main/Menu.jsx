import React, {Component} from "react";
import './Menu.css';
import Slide from "../components/Slide";
import Categorie from "../components/Categorie";



export default class Menu extends Component{
    


    render() {
        return (
            <div>
                <h1 className='title' >Cardápio</h1>
                    <Categorie categorie='Cáfe'/>
                    <Slide></Slide>
            </div>
        )
    }

}