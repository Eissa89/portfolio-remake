import React from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden select-none">
      {/* Background Video: z-index 0 */}
      <BackgroundVideo />

      {/* Navbar & Mobile Overlay: z-index 10 & 9 */}
      <Navbar />

      {/* Main Hero Content: z-index 1 */}
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
