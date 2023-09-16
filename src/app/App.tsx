// import { Header } from '@widgets/header';
import { Hero } from '../widgets/hero';
import MainLayout from './layouts/MainLayout';
import { Provider } from './providers';

function App() {
  return (
    <Provider>
      <MainLayout>
        <Hero />
      </MainLayout>
    </Provider>
  );
}

export default App;
