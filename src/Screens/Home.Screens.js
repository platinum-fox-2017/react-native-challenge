import React, { Component } from 'react';
import axios from 'axios'

// Native
import { StyleSheet, Text } from 'react-native'
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

// Dispatch
import { getQuestions } from '../../store/action'

// Components
import FormDiff from '../Components/Home.Form_Diff.js'
import FormNumber from '../Components/FormNumber.js'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      warning: false,
      difficulty: "easy",
      number: 5
    }
  }

  changeDiff = (value) => {
    this.setState({
      difficulty: value.toLowerCase()
    })
  }

  changeNumber = (value) => {
    this.setState({
      number: value
    })
  }

  static navigationOptions = {
    title: 'Game Uhuy'
  }

  play = () => {
    if (this.state.name !== '') {
      this.props.navigation.navigate('Question', 
      {
        name: this.state.name,
        difficulty: this.state.difficulty,
        number: this.state.number
      })
    } else {
      this.setState({warning: true})
    }
  }

  setName = (text) => {
    this.setState({
      name: text
    })
  }

  render() {
    return (
      <Container style={style.container}>
        <Content>
          <Form>
            <Item style={style.input_length}>
              <Label>Username</Label>
              <Input onChangeText={(text) => this.setName(text)} />
            </Item>
              <FormDiff
                diff={this.state.difficulty}
                change={this.changeDiff}/>
              <FormNumber
                number={this.state.number}
                change={this.changeNumber}/>
            {
               this.state.warning === true && 
                <Item>
                  <Text>Please input your name</Text>
                </Item>
               }
            <Item>
              <Button onPress={this.play} style={style.input_length}>
                <Text style={{width: 400, color: '#ffffff', textAlign: 'center'}}>Play</Text>
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}


const stateToProps = (state) => {
  return {
    data: state.data
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  getQuestions
}, dispatch)

export default connect(stateToProps,dispatchToProps)(Home)

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  input_length: {
    width: 380,
  },
});