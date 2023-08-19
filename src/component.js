import React, { Component } from 'react'
import './compo.css'
import Imagegall from './compProps';

class Image extends React.Component {
    arrImg1=[
        {
             name:"image1",
            img:"images/2.jpeg",
             des:"discription of image",
    
        },
        {
             name:"image1",
            img:"images/3.jpeg",
             des:"discription of image",
    
        },
        {
             name:"image2",
            img:"images/4.jpeg",
             des:"discription of image",
    
        },
        {
             name:"image3",
             img:"images/5.jpeg",
             des:"discription of image",
    
        },
        {
             name:"image4",
            img:"images/5.jpeg",
             des:"discription of image",
    
        },
        {
             name:"image5",
            img:"images/6.jpeg",
             des:"discription of image",
    
        },
        {
             name:"image6",
            img:"images/7.jpeg",
             des:"discription of image",
    
        },
        {
             name:"image7",
            img:"images/8.jpeg",
             des:"discription of image",
    
        },
        {
             name:"image8",
            img:"images/9.jpeg",
             des:"discription of image",
    
        },
        {
             name:"image9",
            img:"images/10.jpeg",
             des:"discription of image",
    
        },
    
    ];

  render() {
    
    return(
        
       <Imagegall arrImg1={this.arrImg1}/>
     
    )
  }
}

export default Image;
