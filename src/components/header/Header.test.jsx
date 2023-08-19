import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from './Header';

const mockStore = configureStore([]);

test('Header component snapshot', () => {
  const initialState = {
    appInfo: {
      activePage: 'League',
      showSearchForm: true,
    },
  };
  const store = mockStore(initialState);
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
        ,
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
