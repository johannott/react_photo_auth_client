import React, { PropTypes } from 'react';

class RadioButtonGroup extends React.Component {
  static propTypes = {
      items : PropTypes.array,
      value : PropTypes.number,
      onClick : PropTypes.func,
      type : PropTypes.string
  };

  render() {
    const {items,type} = this.props;
    const itemElements = items.map(this.getItemElement);
    const typeStyle = type == 'default' ? '' : 'secondaryButton';
    return (
      <div className={['buttons', typeStyle].join(' ')}>
        {itemElements}
      </div>
    );
  }

  getItemElement = (item) => {
    const {value} = this.props;
    const className = value == item.value ? this.getSelectedClassName() : '';
    return (
      <a key={item.value+item.label} href="#" className={className}
      onClick={this.onClick(item.value).bind(this)}>{item.label}</a>
    );
  };

    getSelectedClassName() {
        const {type} = this.props;
        switch (type) {
            case 'default' :
                return 'defaultButtonSelected';
            case 'secondary' :
                return 'secondaryButtonSelected';
        }
    }

    onClick(value) {
        return function () {
            this.props.onClick(value);
        };
    }
}

export default RadioButtonGroup;
