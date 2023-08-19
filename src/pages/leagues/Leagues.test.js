import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom'; // Importamos MemoryRouter
import Filter from '../../components/filter/Filter';
import LeagueCard from '../../components/league-card/LeagueCard';

const mockStore = configureStore([]);

test('Leagues Page snapshot', () => {
  const initialState = {
    league: {
      leagues: [
        {
          id: 1,
          name: 'English PL',
          logos: { dark: '' },
        },
      ],
      searchString: 'United',
    },
  };
  const store = mockStore(initialState);

  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <Filter filterHandler={() => {}} />
          <LeagueCard />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
