import { render, getByTestId, getByPlaceholderText } from '@testing-library/react';
import App from './App';
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';

const middlewares = []
const mockStore = configureStore(middlewares);
const store = mockStore({})

test('renders learn react link', () => {
  <Provider store={store}>
      render(<App />);
  </Provider>
  expect(() => getByPlaceholderText("What do you want to watch?").Value).not.toBeNull()
});
