import { FC, PropsWithChildren } from 'react';
import { Header } from '../../widgets';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />

      {children}
    </div>
  );
};

export default MainLayout;