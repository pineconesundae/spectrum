import { Component } from 'react';
import ColorRow from '../Rows/ColorRow';
import CurGuessRow from '../Rows/CurGuessRow';
import GuessRow from '../Rows/GuessRow';

class Board extends Component {
  constructor(props) {
    super(props);

    const tokenKey = 'ABCDE';
    const answer = this.generatePattern(tokenKey, 4, true);

    this.state = {
      answer,
      guesses: [],
      curGuess: 'XXXX',
      allowDupes: true,
      tokenKey,
      complete: false
    };
  }

  generatePattern = (tokenKey, length = 4, allowDupes = false) => {
    let tokenKeyStr = tokenKey.slice();
    let pattern = '';

    for (let idx = 0; idx < length; idx++) {
      const tokenIdx = Math.floor(Math.random() * tokenKeyStr.length);
      const token = tokenKeyStr[tokenIdx];
      pattern += token;

      if (!allowDupes) {
        tokenKeyStr = `${tokenKeyStr.slice(0, tokenIdx)}${tokenKeyStr.slice(tokenIdx + 1)}`;
      }
    }

    return pattern;
  };

  updateGuess = (item, idx) => {
    this.setState((state) => {
      const { curGuess } = state;

      const nextGuess = curGuess.slice().split('');
      nextGuess[idx] = item.token;

      return {
        curGuess: nextGuess.join('')
      };
    });
  };

  clearGuess = () => {
    this.setState({
      curGuess: 'XXXX'
    });
  };

  submitGuess = () => {
    this.setState((state) => {
      const { answer, curGuess, guesses } = state;

      const complete = answer === curGuess;
      const status = this.evaluateGuess(answer, curGuess);

      guesses.push({
        guessStr: curGuess,
        status
      });

      return {
        complete,
        curGuess: 'XXXX',
        guesses
      };
    });
  };

  evaluateGuess = (answerStr, guessStr) => {
    const answer = Array.from(answerStr);
    const guess = Array.from(guessStr);

    const result = guess.map((token, idx) => {
      if (token === answer[idx]) {
        guess[idx] = 'X';
        answer[idx] = 'X';
        return 2;
      }

      return 0;
    });

    guess.forEach((token, idx) => {
      if (token !== 'X') {
        const answerIdx = answer.findIndex((answerToken) => answerToken === token);

        if (answerIdx > -1) {
          guess[idx] = 'X';
          answer[answerIdx] = 'X';
          result[idx] = 1;
        }
      }
    });

    return result;
  };

  render() {
    const {
      guesses,
      curGuess,
      tokenKey,
      complete
    } = this.state;

    return (
      <div className="board">
        {
          guesses.map((guess) => (
            <GuessRow guess={guess} />
          ))
        }
        <CurGuessRow
          curGuess={curGuess}
          handleUpdateGuess={this.updateGuess}
          handleClearGuess={this.clearGuess}
          handleSubmitGuess={this.submitGuess}
        />
        <ColorRow tokens={tokenKey} />
        {complete && 'OMG!'}
      </div>
    );
  }
}

export default Board;
