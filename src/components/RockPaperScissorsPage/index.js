import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  ListContainer,
  ListItem,
  ImageButton,
  ChoiceImage,
  ResultContainer,
  EachResultContainer,
  ResultAndPlayAgainContainer,
  ResultDescription,
  PlayAgainButton,
  ResultImageDescription,
  AppContainer,
  HeaderContainer,
  Heading,
  ScoreDescriptionContainer,
  ScoreDescription,
  PopUpView,
  RulesView,
} from './styledComponents'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissorsPage extends Component {
  state = {
    score: 0,
    selectedChoice: '',
    result: '',
    clicked: false,
    randomNum: '',
  }

  onClickRock = () => {
    const num = Math.floor(Math.random() * choicesList.length)
    this.setState({selectedChoice: choicesList[0], randomNum: num})
    this.setState(prevState => ({clicked: !prevState.clicked}))

    if (choicesList[num].id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (choicesList[num].id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else {
      this.setState({
        result: 'IT IS DRAW',
      })
    }
  }

  onClickScissors = () => {
    const num = Math.floor(Math.random() * choicesList.length)
    this.setState({selectedChoice: choicesList[0], randomNum: num})
    this.setState(prevState => ({clicked: !prevState.clicked}))

    if (choicesList[num].id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else if (choicesList[num].id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else {
      this.setState({
        result: 'IT IS DRAW',
      })
    }
  }

  onClickPaper = () => {
    const num = Math.floor(Math.random() * choicesList.length)
    this.setState({selectedChoice: choicesList[0], randomNum: num})
    this.setState(prevState => ({clicked: !prevState.clicked}))

    if (choicesList[num].id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else if (choicesList[num].id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    } else {
      this.setState({
        result: 'IT IS DRAW',
      })
    }
  }

  renderGameView = () => (
    <>
      <ListContainer>
        <ListItem>
          <ImageButton
            type="button"
            onClick={this.onClickRock}
            data-testid="rockButton"
          >
            <ChoiceImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
            />
          </ImageButton>
        </ListItem>
        <ListItem>
          <ImageButton
            type="button"
            onClick={this.onClickScissors}
            data-testid="scissorsButton"
          >
            <ChoiceImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
            />
          </ImageButton>
        </ListItem>
        <ListItem>
          <ImageButton
            type="button"
            onClick={this.onClickPaper}
            data-testid="paperButton"
          >
            <ChoiceImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
            />
          </ImageButton>
        </ListItem>
      </ListContainer>
    </>
  )

  onClickPlayAgain = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }))
  }

  renderGameResultsView = () => {
    const {randomNum, result, selectedChoice} = this.state

    return (
      <>
        <ResultContainer>
          <EachResultContainer>
            <ResultImageDescription>YOU</ResultImageDescription>
            <ChoiceImage src={selectedChoice.imageUrl} alt="your choice" />
          </EachResultContainer>
          <EachResultContainer>
            <ResultImageDescription>OPPONENT</ResultImageDescription>
            <ChoiceImage
              src={choicesList[randomNum].imageUrl}
              alt="opponent choice"
            />
          </EachResultContainer>
        </ResultContainer>
        <ResultAndPlayAgainContainer>
          <ResultDescription>{result}</ResultDescription>
          <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultAndPlayAgainContainer>
      </>
    )
  }

  render() {
    const {score, clicked} = this.state

    return (
      <AppContainer>
        <HeaderContainer>
          <Heading>
            ROCK <br /> PAPER <br /> SCISSORS
          </Heading>
          <ScoreDescriptionContainer>
            <ScoreDescription>
              Score <br /> {score}
            </ScoreDescription>
          </ScoreDescriptionContainer>
        </HeaderContainer>
        {clicked ? this.renderGameResultsView() : this.renderGameView()}
        <RulesView>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Rules
              </button>
            }
            className="popup-content"
          >
            {close => (
              <PopUpView>
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                >
                  <RiCloseLine size={20} />
                </button>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </PopUpView>
            )}
          </Popup>
        </RulesView>
      </AppContainer>
    )
  }
}

export default RockPaperScissorsPage
