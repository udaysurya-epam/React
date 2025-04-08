import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <Outlet />
      </div>
      <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
        <hr />
        <p>© 2025 MyApp</p>
      </footer>
    </>
  );
}

export default Layout;
