import React from 'react';
import classes from './productdetail.module.css';


const Productdetail=(props)=>{
  const colorOption=props.data.colorOption.map((item,pos)=>{
    const classesArr=[classes.productItems]
  if(pos===props.currentView){
    classesArr.push(classes.selectedItem);
  }
    return(
      <img key={pos} className={classesArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.currentSelection(pos)}/>
    )
  })

  const FutureList=props.data.featureList.map((item,pos)=>{
    const classesArr=[classes.futureButton]
    if(pos=== props.currentHeartBeatRate){
      classesArr.push(classes.selectedFutureButton);
    }


    
    return(
      <button onClick={() => props.currentfeature(pos)} key={pos} className={[classesArr.join(' ')].join(' ')}>{item}</button>
    )
  })

   return(
          <div className={classes.productView}>
          <h1 className={classes.producttitle}>{props.data.title}</h1>
          <p className={classes.productDescription}>{props.data.description}
          </p>
          <h3 className={classes.sectionName}>Select Items</h3>
          <div>
            {colorOption}
          {/* <img className={[classes.productItems,classes.selectedItem].join(' ')} src="https://i.imgur.com/iOeUBV7.png" alt="Black Strap"/>
          <img className={classes.productItems} src="https://i.imgur.com/PTgQlim.png" alt="Red Strap"/>
          <img className={classes.productItems} src="https://i.imgur.com/Mplj1YR.png" alt="Blue Strap"/>
          <img className={classes.productItems} src="https://i.imgur.com/Zygu7I3.png" alt="Pink Strap"/>
          <img className={classes.productItems} src="https://i.imgur.com/xSIK4M8.png" alt="Purple Strap"/> */}
        </div>
        <h3 className={classes.sectionName}>Features</h3>
        
        {FutureList}
        
        <div className={classes.buynowbtn}>
          <button>Buy Now</button>
        </div>
        </div>
        
   )
}

export default Productdetail;