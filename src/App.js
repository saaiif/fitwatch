import React from 'react';
import classes from './App.module.css';
import Productdetail from './productdetail';
import ProductImage from './productmainimage';
import Icon from './icon';
import ProductData from './product';

class App extends React.Component{
  state={
    ProductData:ProductData,
    // currentPreviewImage:'https://i.imgur.com/xSIK4M8.png',
    currentPreviewImagePos:0,
    currentHeartBeatRate:0,
  }

  onColorClick=(pos)=>{
    // let updatedItem=this.state.ProductData.colorOption[pos].imageUrl;
    this.setState({currentPreviewImagePos:pos})
  }
   
  onfeatursclick=(pos)=>{
    // let updateFeature=false;
    // if(pos===1){
    //   updateFeature=true;
    // }
    this.setState({currentHeartBeatRate:pos})
  }
  
  render(){
  return (
    <div className="App">
      <Icon/>

      <div className={classes.mainFrame}>
        <div className={classes.productImage}>
            <ProductImage currentImage={this.state.ProductData.colorOption[this.state.currentPreviewImagePos].imageUrl} currentHeartBeatRate={this.state.currentHeartBeatRate}/>
        </div>

        <div className={classes.productView}>
            <Productdetail data={this.state.ProductData} currentSelection={this.onColorClick} currentView={this.state.currentPreviewImagePos} currentfeature={this.onfeatursclick} currentHeartBeatRate={this.state.currentHeartBeatRate}/>
            
        </div>
       

      </div>
    </div>
  );
}
}

export default App;
