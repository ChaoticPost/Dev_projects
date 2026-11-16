import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BentoHome from './sections/BentoHome/BentoHome';
import BentoAbout from './sections/BentoAbout/BentoAbout';
import BentoResources from './sections/BentoResources/BentoResources';
import BentoResourceDetail from './sections/BentoResources/BentoResourceDetail';
import ProjectCaseStudy from './sections/ProjectCase/ProjectCaseStudy';
import { SectionId } from './types/sections';
import { pathForSection, routerBasename, sectionFromPath } from './lib/routes';
import { destroySmoothScroll } from './lib/smoothScroll';

interface LocationState {
  backTo?: SectionId;
}

const backLabelFor = (target: SectionId): string =>
  target === 'intro' ? 'Home' : target === 'resources' ? 'Projects' : 'About';

const SiteApp: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => () => destroySmoothScroll(), []);

  const view = sectionFromPath(location.pathname);
  const backTo = (location.state as LocationState | null)?.backTo ?? 'intro';

  const navigateTo = (id: SectionId) => {
    navigate(pathForSection(id));
  };

  const openProjectCase = (projectId: string, origin: SectionId) => {
    navigate(pathForSection('project-case', { projectId }), { state: { backTo: origin } });
  };

  if (!view) {
    return <Navigate to="/" replace />;
  }

  const backConfig =
    view === 'project-case' ? { target: backTo, label: backLabelFor(backTo) } : undefined;

  return (
    <Layout currentView={view} onNavigate={navigateTo} backConfig={backConfig}>
      <Routes location={location}>
        <Route
          path="/"
          element={
            <BentoHome onNavigate={navigateTo} onOpenProjectCase={(id) => openProjectCase(id, 'intro')} />
          }
        />
        <Route
          path="/about"
          element={<BentoAbout onOpenProjectCase={(id) => openProjectCase(id, 'about')} />}
        />
        <Route
          path="/resources"
          element={<BentoResources onOpenProjectCase={(id) => openProjectCase(id, 'resources')} />}
        />
        <Route path="/resources/:projectId" element={<BentoResourceDetail />} />
        <Route path="/case/:projectId" element={<ProjectCaseStudy fallbackView={backTo} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => (
  <BrowserRouter basename={routerBasename}>
    <SiteApp />
  </BrowserRouter>
);

export default App;
