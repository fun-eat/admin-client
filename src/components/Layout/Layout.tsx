import type { ReactNode } from 'react';

import NavigationBar from './NavigationBar';

import { aside, main } from './layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <aside className={aside}>
        <NavigationBar />
      </aside>
      <main className={main}>{children}</main>
    </div>
  );
};

export default Layout;
