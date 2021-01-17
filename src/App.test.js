// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Books/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  books: [],
  localBooks: []
}
it('renders without crashing', () => {
  const store = mockStore(initialState);
  shallow(
    <Provider store={store}> 
      <App />
    </Provider>
  );
});