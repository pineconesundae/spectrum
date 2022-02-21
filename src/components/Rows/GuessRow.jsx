import { Square } from '../Squares';

const GuessRow = ({ guess }) => {
  const { guessStr, status } = guess;

  const guessTokens = Array.from(guessStr);

  return (
    <div className="guess-row-wrapper flex">
      {
        guessTokens.map((token, idx) => (
          <Square token={token} status={status[idx]} />
        ))
      }
    </div>
  );
};

export default GuessRow;
