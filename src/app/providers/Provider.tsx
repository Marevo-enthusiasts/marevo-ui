import { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Provider: FC<PropsWithChildren> = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

export default Provider;