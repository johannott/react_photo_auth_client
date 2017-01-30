import React, { Component, PropTypes } from 'react';

class PhotoGrid extends Component {

  static propTypes = {
        columns: PropTypes.number,
        photos: PropTypes.array
    };

  constructor(props) {
    super(props);

    this.state = {
      fullScreenImage: null
    };
  }

  getGridElements(photos) {
    const classNames = this.isShowInfo() ? ['imageGridItem', 'column1'] : ['imageGridItem'];
    const style = this.isShowInfo() ? {} : {width : this.getPercentWidth() + '%'};

    debugger;
    return photos.map(photo => (
      <div
         className={classNames.join(' ')}
         key={photo.id}
         style={style}>
         {this.getImageElement(photo)}
      </div>
    ));
  }

  getImageElement = (photo) => {
    const classNames = this.isShowInfo() ? ['imageWrapper', 'column1Image'] : ['imageWrapper'];
    const style = {backgroundImage: `url(${photo.src})`};

    return (
      <div >
        <div className={classNames.join(' ')}
             onClick={this.imageClickHandler(photo).bind(this)}
             style={style}>
        </div>
      </div>
    );
  };

  getFullScreenImage = (src) => {
    const classNames = src ? ['lightbox'] : ['hide', 'lightbox' ];
    return (
        <a href="#_" className={classNames.join(' ')} onClick={this.fullScreenImageClickHandler.bind(this)}>
            <img src={src} />
        </a>);
  };

  imageClickHandler(photo) {
        return function () {
            this.setState({
                fullScreenImage : photo.src
            })
        }
  }

  fullScreenImageClickHandler() {
      this.setState({
          fullScreenImage : null
      })
  }

  isShowInfo = () => this.props.columns == 1;
  getPercentWidth = () => 100 / this.props.columns - 1;

  render() {
    return (
      <div>
        {this.getGridElements(this.props.photos)}
        {this.getFullScreenImage(this.state.fullScreenImage)}
      </div>
    );
  }
}

export default PhotoGrid;
