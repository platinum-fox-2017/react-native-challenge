import React, { Component } from 'react';

import { 
  Container, 
  Header, 
  Content, 
  Form, 
  Item, 
  Input, 
  Label, 
  Button,
  Picker,
  Icon
} from 'native-base'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class FormNumber extends Component {

  onValueChangeNumber (value) {
    this.props.change(value)
  }

  render() {
    return (
      <Form>
        <Picker
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={this.props.number}
          onValueChange={this.onValueChangeNumber.bind(this)}
        >
          <Picker.Item label="5" value="5" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="15" value="15" />
        </Picker>
      </Form>
    )
  }
};

const stateToProps = (state) => {
  return {
    data: state.data
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(stateToProps,dispatchToProps)(FormNumber)