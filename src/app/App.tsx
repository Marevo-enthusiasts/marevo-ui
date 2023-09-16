// import { Header } from '@widgets/header';
import MainLayout from './layouts/MainLayout';
import { Provider } from './providers';

function App() {
  return (
    <Provider>
      <MainLayout>
      </MainLayout>
    </Provider>
  );
}

export default App;
