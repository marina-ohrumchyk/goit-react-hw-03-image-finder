import React, { Component } from 'react';
import getApi from '../services/getApi';

class ImageGallery extends Component{
state={
  myData: [],
  isLoading:false,
}
componentDidUpdate(prevProps, prevState){
    console.log("this.props: >>", this.props)
if (prevProps.searchText!==this.props.searchText){
   this.setState({isLoading:true})
    getApi(this.props.searchText)
    .then((response)=> response.json())
.then((myData)=> this.setState({myData: myData.hits}))
// .then(data=> this.setState(() => ({
//   myData: [...prevState.myData, ...data.hits],
// })))
.finally(()=>{
  this.setState({isLoading:false})
})
}
}
render(){
  const { myData, isLoading } = this.state;
    return(<div>
      {
        isLoading&&<div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      }
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
      <button>Load more</button>
      
    </div>)
}
}

export default ImageGallery;