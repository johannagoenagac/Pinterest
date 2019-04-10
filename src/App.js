import React, { Component } from 'react';
import './App.css';
import Image from './Components/Image';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:false,
      modal: false,
    }

    this.openModal=this.openModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
  }

  openModal(imag){
    this.setState({
      ...this.state,
      modal:imag,
    })

  }

  closeModal(){
    this.setState({
      ...this.state,
      modal:false,
  })

}

componentDidMount(){
   this.apiResult();
  }

apiResult(){
  fetch("https://api.unsplash.com/search/photos?page=1&per_page=20&query=tattos&client_id=bcee26febb119737500add1650f9e0e5c3cb4812778bb598a7b2056672f49a70")
    .then(data=>data.json())
    .then(data=>{
    let dataArr= data.results
    console.log(dataArr)
    this.setState({
      ...this.state,
      data: dataArr,
    })
  });
  
}

showPhotos(){
  const read=this.state.data.map(item=>{
    return(
    <Image
    doClick={this.openModal}
    url={item.urls.thumb}/>
    )
  })
  return read
}
  

  render() {
    return (

      <div >
      
      <Navbar/>
      
      <div className="container">
      {this.state.modal && <Modal closeModal={this.closeModal}
      seeImg={this.state.modal}/>}
      {this.state.data && this.showPhotos()}
      </div>

      </div>
    );
  }
}

export default App;
