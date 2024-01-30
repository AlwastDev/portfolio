import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header, Loader } from './components';

import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./pages/Home/HomePage.tsx'));
const AboutMePage = lazy(() => import('./pages/AboutMe/AboutMePage.tsx'));
const CertificatesPage = lazy(() => import('./pages/Certificates/CertificatesPage.tsx'));
const ProjectsPage = lazy(() => import('./pages/Projects/ProjectsPage.tsx'));

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutMe" element={<AboutMePage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </Suspense>
      </main>
      <ToastContainer />
    </>
  );
};

export default App;
