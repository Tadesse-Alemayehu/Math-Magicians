import renderer from 'react-test-renderer';
import Home from '../../components/pages/Home';

it('rendered home component match snapshot', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
