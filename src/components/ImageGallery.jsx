import React, { Component } from 'react';
import getApi from '../services/getApi';

class ImageGallery extends Component{
state={
  myData: [],
}
componentDidUpdate(prevProps, prevState){
    console.log("this.props: >>", this.props)
if (prevProps.searchText!==this.props.searchText){
    // fetch()
    getApi(this.props.searchText)
    .then((response)=> response.json())
.then(data=> this.setState(() => ({
  myData: [...prevState.myData, ...data.hits],
})))
}
}
render(){
  const { myData, loading } = this.state;
    return(<div>
      <ul className="gallery">
        {myData.map((hit, index) => (
          <li key={hit.id} className="gallery-item">
            <img
              className="gallery-img"
              src={hit.webformatURL}
              alt={hit.tags}
              // onClick={() => clickImage(index)}
            />
          </li>
        ))}
      </ul>
      
    </div>)
}
}

export default ImageGallery;