import renderer from 'react-test-renderer';
import Button from '../button';

it('render button', () => {
  const button = renderer
    .create(<Button />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
