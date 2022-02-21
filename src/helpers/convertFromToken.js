import TOKENS from '../constants/tokens';

const fn = (token) => {
  const result = [];

  for (let idx = 0; idx < token.length; idx++) {
    const color = TOKENS[token[idx]] || 'white';
    result.push(color);
  }

  return result;
};

export default fn;
