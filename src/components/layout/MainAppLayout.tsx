import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, pageTitle }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);

  const toggleMobileSidebar = React.useCallback(() => {
    setIsMobileSidebarOpen((prev) => !prev);
  }, []);

  const closeMobileSidebar = React.useCallback(() => {
    setIsMobileSidebarOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isMobileOpen={isMobileSidebarOpen} onClose={closeMobileSidebar} />

      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={closeMobileSidebar}
          aria-hidden="true"
        />
      )}

      <div className="md:pl-64 flex flex-col min-h-screen">
        <Header pageTitle={pageTitle} onMenuToggle={toggleMobileSidebar} />
        <main className="flex-1 p-6 mt-16">
          {/* Content from Layout Requirements: grid grid-cols-2 gap-6 can be applied here or by children */} 
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
