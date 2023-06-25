import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      
      <div className='my-3' style={{margin:'10px'}}>
        <div className="card">
  <img src={!imageUrl? "https://static.toiimg.com/thumb/msid-101026123,width-1070,height-580,imgsize-69424,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : imageUrl} className="card-img-top"alt="..."/>
  <div className="card-body" style={{backgroundColor: 'white'}} >
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-danger mt-5" style={{position: 'absolute', bottom: '3px'}} >Read Full Article</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem