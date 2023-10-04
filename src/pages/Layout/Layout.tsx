import { Outlet } from 'react-router-dom';

import NavigationBar from './NavigationBar';

import { aside, main } from './layout.css';

const Layout = () => {
  return (
    <div>
      <aside className={aside}>
        <NavigationBar />
      </aside>
      <main className={main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
