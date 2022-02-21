import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import App from './components/App/App';

import reducer from './reducers';

import './styles/app.scss';

/* const store = configureStore({
  reducer
}); */

const render = () => {
  ReactDOM.render(
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>,
    document.getElementById('root')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App/App', render);
}
