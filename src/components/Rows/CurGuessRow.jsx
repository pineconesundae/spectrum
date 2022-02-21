import { DroppableSquare } from '../Squares';

const CurGuessRow = ({ curGuess, handleUpdateGuess, handleClearGuess, handleSubmitGuess }) => {
  const guessTokens = Array.from(curGuess);

  return (
    <div className="guess-row-wrapper flex">
      <button type="button" onClick={handleClearGuess}>Clear</button>
      {
        guessTokens.map((token, idx) => (
          <DroppableSquare
            idx={idx}
            token={token}
            onDrop={handleUpdateGuess}
          />
        ))
      }
      <button type="button" onClick={handleSubmitGuess}>Submit</button>
    </div>
  );
};

export default CurGuessRow;
