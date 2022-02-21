import { DraggableSquare } from '../Squares';

const ColorRow = ({ tokens }) => {
  const tokenArray = Array.from(tokens);

  return (
    <div className="guess-row-wrapper flex">
      {
        tokenArray.map((token) => (
          <DraggableSquare token={token} />
        ))
      }
    </div>
  );
};

export default ColorRow;
