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

// Props
import { setdifficulty } from '../../store/action'

class FormDiff extends Component {
  constructor(){
    super()
    this.state = {
      difficulty: 'easy'
    }
  }

  onValueChange (value)  {
    this.props.change(value)
  }

  render() {
    return (
      <Form>
        <Picker
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={this.props.diff}
          onValueChange={this.onValueChange.bind(this)}
        >
          <Picker.Item label="Easy" value="easy" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Hard" value="hard" />
        </Picker>
      </Form>
    )
  }
}

const stateToProps = (state) => {
  return {
    data: state.data
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  setdifficulty
}, dispatch)

export default connect(stateToProps,dispatchToProps)(FormDiff)
