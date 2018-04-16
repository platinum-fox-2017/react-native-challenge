import React, { Component } from 'react';
import { StyleSheet, Text, Alert, View } from 'react-native'
import axios from 'axios'
import { 
  Container, 
  Content, 
  Button, 
  Icon, 
  Card, 
  CardItem, 
  Body, 
  Left, 
  Right, 
  IconNB } from 'native-base'

// Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Dispatch
import { getQuestions, reloadData, spliceQuestion } from '../../store/action'

// Components
import QuestionContent from '../Components/Question.Card.js'


class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      index: 0,
      score: 0,
      done: false,
      name: '',
      difficulty: '',
      length: 0,
      countQuestion: 0
    }
  }

  static navigationOptions = {
    title: 'Question Uhuy'
  }

  componentDidMount () {
    const { params } = this.props.navigation.state
    this.setState({name: params.name, difficulty: params.difficulty, length: params.number})    
    this.props.getQuestions({diff:params.difficulty, number: params.number})
  }

  submit = (answer, question, name) => {
    let index;
    for (let i = 0; i < this.props.data.data.length; i++) {
      if (question === this.props.data.data[i].question) {
        index = i
      }
    }
    if (answer === this.props.data.data[index].correct_answer) {
      this.setState({score: this.state.score + 1})
    }

    let newCount = this.state.countQuestion + 1
    this.setState({
      countQuestion: newCount
    })
    this.props.spliceQuestion({index, data:this.props.data.data})
    if (this.state.countQuestion === (this.state.length) - 1) {
      Alert.alert(`Congrats ${name} your score is ${this.state.score}`)
      this.setState({
        done: true,
      })
      this.props.reloadData()
    } else {
      this.setState({index: this.state.index + 1})
    }
  }

  reloadGames = (answer) => {
    const { params } = this.props.navigation.state
    if (answer === true) {
      this.props.getQuestions({diff:params.difficulty, number: params.number})
    } else {
      this.props.reloadData()
      this.props.navigation.navigate('Home')
    }
    this.setState({
      score: 0,
      done: false,
      length: params.number,
      countQuestion: 0
    })
  }

  componentDidUpdate() {
    console.log(this.props.data.data)
  }

  render() {
    return (
      <Container>
        <Content padder>
        <View style={styles.header_view}>
          <View style={styles.header_view_each}>
            <Text> is playing the game</Text>
          </View>
          <View style={styles.header_view_each}>
            <Text style={{textAlign: 'center'}}>Score {this.state.score}</Text>
          </View>
          <View style={styles.header_view_each}>
            <Text style={{textAlign: 'right'}}>Level {this.state.difficulty}</Text>
          </View>
        </View>
        {
          this.props.data.data.length > 0 &&
          <QuestionContent style={styles.questionHeight}
          submit={this.submit}
          name={this.state.name}
          index={this.state.index}
          questions={this.props.data.data}
          score={this.state.score}/>
        }
        {
          this.state.done === true &&
          <Card>
            <CardItem>
              <Button style={styles.done_buttons} onPress={() => this.reloadGames(true)}>
                <Text style={styles.button_font}>Main</Text>
              </Button>
              <Button style={styles.done_buttons} onPress={() => this.reloadGames(false)}>
                <Text style={styles.button_font}>Pulang</Text>
              </Button>
            </CardItem>
          </Card>
        }
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
  getQuestions, reloadData, spliceQuestion
}, dispatch)

export default connect(stateToProps,dispatchToProps)(Question)

const styles = StyleSheet.create({
  
  button_font: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#ffffff',
    flex: 1
  },
  done_buttons: {
    width: 80,
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 10,
    marginRight: 10,
    flex: 1
  },
  header_view: {
    flex: 1, 
    flexDirection:'row'
  },
  header_view_each: {
    flex: 1,
    width: 100
  },
  questionHeight: {
    height: 400
  }
})

