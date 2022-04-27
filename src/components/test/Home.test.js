import renderer from 'react-test-renderer';
import Home from '../pages/Home';
it('render home component', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});