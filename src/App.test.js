import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import App from './components/App';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

it('renders App component', () => {
  useSelector.mockImplementation((selector) => selector({
    searchResults: {
      value: [{restaurant: {
        id: '123',
        thumb: 'asdf.jpg',
        name: 'Jello',
        cuisines: 'noodle',
        location: {
          address: '24 rue'
        }
      }}]
    }
  }));
  render(<App />);

});
