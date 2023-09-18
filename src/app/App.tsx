import { Hero } from '~/widgets';
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
