import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { ReactRpg } from 'react-rpg';

const previewStyles = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'fixed',
  border: 'solid #1a1a1a 10px',
  zIndex: '3',
};

const ImagePreview = ({ url }) => <img src={url} style={previewStyles} alt={url} width="30%" height="auto" />;

class Feature extends Component {

  constructor(props) {
      super(props);

      this.state = {
        popUp: false
      };
    }

  componentWillMount() {
     this.props.fetchMessage();
  }

  /**
 * A generic callback function to be executed upon click of the image wrapper.
 * @param url - The URL prop of the object
 * @param obj - The syntheticMouseEvent object via react.
 */
imagePopup(url, obj) {
  this.setState({ popUp: url });
  console.log(obj);
  setTimeout(() => this.setState({ popUp: false }), 5000);
}

  render() {

    var images = [];

    for (var i = 1; i <= 645; i++) {
        var image = {url: 'https://s3-eu-west-1.amazonaws.com/maeveandjohann/wedding/jm_'+i+'.jpg', clickHandler: this.imagePopup.bind(this)}
        images.push(image);
    }

    return (
      <div>
        {this.props.message}
        { this.state.popUp !== false ? <ImagePreview url={this.state.popUp} /> : null }
        <ReactRpg imagesArray={images} columns={[ 1, 2, 5 ]} padding={10} />
      </div>
    );
  }
}

function mapStateToProps(state) {
   return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
