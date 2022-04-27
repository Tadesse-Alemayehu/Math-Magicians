import renderer from 'react-test-renderer';
import Quote from '../../components/pages/Quote';

it('should render Quotes component', () => {
  const quote = renderer.create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
});
