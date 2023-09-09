import styled from 'styled-components/macro'

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  flex-wrap: wrap;
`

export const ListItem = styled.li``

export const ImageButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const ChoiceImage = styled.img`
  height: 50%;
  width: 30%;
`
export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap
  align-items: center;
`
export const EachResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultAndPlayAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResultImageDescription = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
`
export const ResultDescription = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
`
export const PlayAgainButton = styled.button`
  height: 40px;
  width: 160px;
  border: none;
  border-radius: 10px;
  color: #223a5f;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  font-family: 'Bree Serif';
`
export const AppContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-color: #223a5f;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 80px;
  border: 2px solid #ffffff;
  border-radius: 15px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 36px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const ScoreDescriptionContainer = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #ffffff;
`
export const ScoreDescription = styled.p`
  color: #223a5f;
  font-size: 32px;
  font-weight: 500;
  align-self: center;
  font-family: 'Roboto';
`

export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
  background-color: #ffffff;
`
export const RulesView = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
  margin-top: 60px;
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
