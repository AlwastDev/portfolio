import { Header } from './components';
import { Route, Routes } from 'react-router-dom';
import { AboutMePage, CertificatesPage, ContactMePage, Home, ProjectsPage } from './pages';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMePage />} />
        <Route path="/contactMe" element={<ContactMePage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
};

export default App;
