import PageLayout from './templates/layouts/PageLayout';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import { GlobalContextProvider } from './contexts/GlobalContext';
import './reset.scss';
import './global.scss';

function App() {
  return (
    <GlobalContextProvider>
      <PageLayout header={<Header />} footer={<Footer />}>
          <LandingPage></LandingPage>
      </PageLayout>
    </GlobalContextProvider>
  );
}

export default App
