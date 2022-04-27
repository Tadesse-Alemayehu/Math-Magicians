import renderer from 'react-test-renderer';
import Calculator from '../../components/pages/Calculator';

it('Calculator matches snapshot', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
