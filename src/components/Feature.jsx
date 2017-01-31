import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PhotoGrid from './PhotoGrid.jsx';
import RadioButtonGroup from './RadioButtonGroup.jsx';

const columnsData = [
    {value: 2, label: 'x2'},
    {value: 3, label: 'x3'}];

class Feature extends Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: 2
    };
  }

  componentWillMount() {
    this.props.fetchMessage();
  }

  onClick(value) {
    this.setState({
      columns: value
    });
  }

  render() {
    const { columns } = this.state;
    var photos = [];

    for (var i = 1; i <= 645; i++) {
      var photo = {src: 'https://s3-eu-west-1.amazonaws.com/maeveandjohann/wedding/jm_' + i + '.jpg', id: i};
      photos.push(photo);
    }

    return (
      <div>
        <RadioButtonGroup items={columnsData} value={columns} onClick={this.onClick.bind(this)} type="secondary"/>
        <PhotoGrid photos={photos} columns={this.state.columns}></PhotoGrid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
