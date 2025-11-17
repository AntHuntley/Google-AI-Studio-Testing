
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { projects } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#\/project\/(\d+)$/);
      
      if (match) {
        const projectId = parseInt(match[1], 10);
        const project = projects.find(p => p.id === projectId);
        setSelectedProject(project || null);
        window.scrollTo(0, 0);
      } else {
        setSelectedProject(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange, false);
    handleHashChange(); // Run on initial load to check for a deep link

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900/30 -z-10"></div>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedProject ? (
          <ProjectDetail project={selectedProject} />
        ) : (
          <ProjectGallery projects={projects} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;