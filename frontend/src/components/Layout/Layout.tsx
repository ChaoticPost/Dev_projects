import React, { ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import DotCursor from '../DotCursor/DotCursor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HugeIcon from '../icons/HugeIcon';
import { ArrowLeft01Icon } from '../icons/iconMap';
import { SectionId } from '../../types/sections';
import { scrollPageToTop, setScrollContainer } from '../../lib/smoothScroll';
import styles from './Layout.module.css';

const SITE_TITLE = 'Daria Chugunova fullstack developer';

interface LayoutProps {
  children: ReactNode;
  currentView: SectionId;
  onNavigate: (sectionId: SectionId) => void;
  backConfig?: { target: SectionId; label: string };
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate, backConfig }) => {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const isIntroView = currentView === 'intro';
  const isAboutView = currentView === 'about';
  const isBentoView = isIntroView || isAboutView;
  const isResourcesFlow = currentView === 'resources' || currentView === 'resource-detail';
  const isProjectCaseView = currentView === 'project-case';
  const isScrollableBentoView = isAboutView || isResourcesFlow || isProjectCaseView;
  const isFullBleedView = isBentoView || isResourcesFlow || isProjectCaseView;
  const showDotCursor = isBentoView || isResourcesFlow || isProjectCaseView;
  const showBack = currentView !== 'intro';
  const backTarget: SectionId = backConfig?.target ?? (currentView === 'resource-detail' ? 'resources' : 'intro');
  const backLabel = backConfig?.label ?? (currentView === 'resource-detail' ? 'Resources' : 'Home');

  useEffect(() => {
    document.title = SITE_TITLE;
  }, [currentView]);

  useEffect(() => {
    setScrollContainer(isScrollableBentoView ? mainRef.current : null);
    scrollPageToTop();
  }, [location.pathname, isScrollableBentoView]);

  useEffect(() => {
    if (!isFullBleedView) {
      document.body.style.overflow = '';
      return;
    }

    if (isScrollableBentoView) {
      document.body.style.overflow = '';
      return;
    }

    const media = window.matchMedia('(max-width: 639px)');

    const updateOverflow = () => {
      document.body.style.overflow = media.matches ? '' : 'hidden';
    };

    updateOverflow();
    media.addEventListener('change', updateOverflow);

    return () => {
      media.removeEventListener('change', updateOverflow);
      document.body.style.overflow = '';
    };
  }, [isFullBleedView, isScrollableBentoView]);

  return (
    <div
      className={`${styles.layout} ${isFullBleedView ? styles.layoutHome : ''} ${
        isScrollableBentoView ? styles.layoutResources : ''
      }`}
    >
      {showDotCursor && <DotCursor />}
      {!isFullBleedView && <Header onNavigate={onNavigate} />}
      {showBack && (
        <button type="button" className={styles.backButton} onClick={() => onNavigate(backTarget)}>
          <HugeIcon icon={ArrowLeft01Icon} size={16} />
          {backLabel}
        </button>
      )}
      <main
        ref={mainRef}
        className={`${styles.main} ${isFullBleedView ? styles.mainHome : ''} ${
          isScrollableBentoView ? styles.mainResources : ''
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            className={styles.viewTransition}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      {!isFullBleedView && <Footer />}
    </div>
  );
};

export default Layout;
