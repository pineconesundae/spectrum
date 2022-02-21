import COLORS from '../constants/colors';

const fn = (guess) => {
  const result = guess.map((color) => COLORS[color]);

  return result.join('');
};

export default fn;
