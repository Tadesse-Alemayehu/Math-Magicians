import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';
// import useLocation from 'react'
it('Make sure the Navbar renders the same', () => {
  const navbarSnap = renderer
    .create(<Footer />)
    .toJSON();
  expect(navbarSnap).toMatchSnapshot();
});
