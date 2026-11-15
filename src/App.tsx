import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { UnderstoryCaseStudy } from './pages/case-studies/UnderstoryCaseStudy';
import { Maaree360CaseStudy } from './pages/case-studies/Maaree360CaseStudy';
import { KhalilAcademyCaseStudy } from './pages/case-studies/KhalilAcademyCaseStudy';
import { GargaarCaseStudy } from './pages/case-studies/GargaarCaseStudy';
import { HoyHelCaseStudy } from './pages/case-studies/HoyHelCaseStudy';
import { DaryeelOneCaseStudy } from './pages/case-studies/DaryeelOneCaseStudy';
import { CloudCaseStudy } from './pages/case-studies/CloudCaseStudy';
import { Expertise } from './pages/Expertise';
import { Experience } from './pages/Experience';
import { Contact } from './pages/Contact';
import { Resume } from './pages/Resume';
import { Journal } from './pages/Journal';
import { JournalArticle } from './pages/JournalArticle';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/understory" element={<UnderstoryCaseStudy />} />
        <Route path="projects/maaree360" element={<Maaree360CaseStudy />} />
        <Route path="projects/khalil-academy" element={<KhalilAcademyCaseStudy />} />
        <Route path="projects/gargaar" element={<GargaarCaseStudy />} />
        <Route path="projects/tillpro" element={<Navigate to="/projects/maaree360" replace />} />
        <Route path="projects/hoyhel" element={<HoyHelCaseStudy />} />
        <Route path="projects/daryeelone" element={<DaryeelOneCaseStudy />} />
        <Route path="projects/cloud" element={<CloudCaseStudy />} />
        <Route path="expertise" element={<Expertise />} />
        <Route path="experience" element={<Experience />} />
        <Route path="resume" element={<Resume />} />
        <Route path="cv" element={<Navigate to="/resume" replace />} />
        <Route path="journal" element={<Journal />} />
        <Route path="journal/:slug" element={<JournalArticle />} />
        <Route path="contact" element={<Contact />} />
        {/* Support legacy paths without .html or with .html if bookmarked */}
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="about.html" element={<Navigate to="/about" replace />} />
        <Route path="projects.html" element={<Navigate to="/projects" replace />} />
        <Route path="expertise.html" element={<Navigate to="/expertise" replace />} />
        <Route path="experience.html" element={<Navigate to="/experience" replace />} />
        <Route path="resume.html" element={<Navigate to="/resume" replace />} />
        <Route path="cv.html" element={<Navigate to="/resume" replace />} />
        <Route path="journal.html" element={<Navigate to="/journal" replace />} />
        <Route path="contact.html" element={<Navigate to="/contact" replace />} />
        {/* Dedicated 404 and Catch-all fallback */}
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
