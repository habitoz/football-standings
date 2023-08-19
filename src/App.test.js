import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import App from './App';

const mockStore = configureMockStore([thunk]);

test('App component renders as expected', () => {
  const initialState = {
    league: {
      leagues: [
        {
          id: 1,
          name: 'English PL',
          images: { dark: '' },
        },
      ],
      searchString: '',
      error: null,
    },
    appInfo: {
      activePage: 'League',
      showSearchForm: true,
    },
  };

  const store = mockStore(initialState);

  const app = render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  );

  expect(app).toMatchSnapshot();
});
