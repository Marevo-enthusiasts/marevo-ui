import { FC, PropsWithChildren } from 'react';
import { Header, Sidebar } from '~/widgets';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        {children}
      </div>
      
      <Sidebar />
    </>
  );
};

export default MainLayout;