import React, { Component } from 'react'
import './compo.css'
 class Imagegall extends Component {
    render() {

        return(
            <>            
            <h2>My Flower Gallery</h2>
            <div className='row1'>
            {this.props.arrImg1.map((item) => {
                
                return <>
                
                 <div  className='roww'>
                
                    <a target="_blank" href="image"><img src= {item.img}/></a>
                    <div className='imgdes'>
                        <h5>{item.name}</h5> 
                        <p> {item.des}</p>
                    </div>
                    
                 </div>
                </>
                })}
            </div>
            </>

        )
      }
    }

export default Imagegall;
    
    