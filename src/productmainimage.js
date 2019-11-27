import React from 'react';
import classes from './productmainimage.module.css';
const ProductImage=(props)=>{
  const currentHour=new Date().getHours() > 9 ? new Date().getHours(): '0' + new Date().getHours();
  const currentMinute=new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' +new Date().getMinutes();

   return(
     
          <div className={classes.productImage}>
                <img src={props.currentImage} alt=" "/>

                {
                  props.currentHeartBeatRate===1 ? 
                  <div className={classes.heartrate}>
                        <i className="fas fa-heartbeat"></i>
                       <p>78</p>
                  </div>
                    :
                  <div className={classes.currenttime}>
                     <p>{`${currentHour}:${currentMinute}`}</p>
                  </div>
                }
        </div>
   )
}

export default ProductImage;