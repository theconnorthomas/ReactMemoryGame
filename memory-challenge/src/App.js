import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/wrapper"
import Navbar from "./components/navbar"
import Landing from "./components/landing"
import Card from "./components/cards"
import Footer from "./components/footer"
import charObj from "./cards.json"

//Arrey stores clicked images
let clickedImgs = []; 
//Value of current currentScore
let currentScore = 0;
//Value of high currentScore
let highScoreCount = 0;

//Keeps high score from going past 12
const capHighScore = () => {
  if (highScoreCount === 12 || highScoreCount > currentScore){
    return highScoreCount;
  } else highScoreCount++;
}

class App extends Component {
  state = {
    characters: charObj,
    currentScore: currentScore,
    highScore: highScoreCount
  };

  //counts and saves all clicked images 
  rememberClick = (imgNumber) => {
    let gameBox = document.querySelector(".row");
    gameBox.classList.remove("yaGoofed", "winner")
    //checks if image already been clicked
    if (clickedImgs.includes(imgNumber)) {
      //losing the game
      gameBox.classList.add("yaGoofed");
      clickedImgs = [];
      currentScore = 0;
      highScoreCount = 0;
      this.setState({ currentScore: 0 })
    } else {
      //if not clicked before, save it in array
      clickedImgs.push(imgNumber);
      capHighScore();
      currentScore++;
      if (this.state.highScore < highScoreCount) { this.setState({ highScore: highScoreCount }) }
      this.setState({ currentScore: currentScore })
      if (clickedImgs.length === 12) {
        gameBox.classList.add("winner");
      }
    }
    //randomizes the images and set the states
    charObj.sort(() => {
      return (0.5 - Math.random())
    })
    this.setState({ characters: charObj })
  }

  //renders the components
  render() {
    return (
      <Wrapper>

        <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}/>

        <Landing/>
        
        <div className="container">
          <div className="row">
            {this.state.characters.map((character) =>
              (<Card
                key={character.id}
                cardID={character.id}
                rememberClick={this.rememberClick}
                image={character.img}
                className="col-md-3"
              />)
            )}
            {/* end of cards */}
          </div>
        </div>

        <Footer/>

      </Wrapper>
    )
  };
}

export default App;