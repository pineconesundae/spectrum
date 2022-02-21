import { convertFromToken } from '../../helpers';

const Square = ({ token, status }) => {
  const color = convertFromToken(token);
  const borderColor = status === 2
    ? 'green'
    : status === 1
      ? 'yellow'
      : 'black';

  return (
    <div className="square-wrapper">
      <div className={`square ba bw1 br3 bg-${color} b--${borderColor}`} />
    </div>
  );
};

export default Square;
