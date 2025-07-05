import { ReactNode } from "react";
import Sidebar from "./sidebar";

interface ShellProps {
  children: ReactNode;
  items: Array<{ label: string; icon: JSX.Element }>;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onItemClick?: (label: string) => void;
}

const Shell: React.FC<ShellProps> = ({
  children,
  items,
  isDarkMode,
  toggleDarkMode,
  onItemClick,
}) => {
  return (
    <div
      className={`w-full min-h-screen relative ${
        isDarkMode ? "bg-zinc-900" : "bg-stone-400"
      }`}
    >
      {/* Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        {/* Blob 1: Top Left */}
        <div className={`absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl ${
          isDarkMode 
            ? "bg-zinc-700/30" 
            : "bg-blue-400/15"
        }`} />
        
        {/* Blob 2: Bottom Right */}
        <div className={`absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-3xl ${
          isDarkMode 
            ? "bg-gray-800/30" 
            : "bg-purple-400/15"
        }`} />
        
        {/* Blob 3: Center Right */}
        <div className={`absolute top-1/2 right-24 transform -translate-y-1/2 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode 
            ? "bg-gray-700/20" 
            : "bg-indigo-300/10"
        }`} />
        {/* Blob 4: Top Right */}
        <div className={`absolute top-24 right-12 w-60 h-60 rounded-full blur-3xl ${
          isDarkMode 
            ? "bg-zinc-600/20" 
            : "bg-pink-300/15"
        }`} />
        {/* Blob 5: Bottom Left */}
        <div className={`absolute bottom-24 left-12 w-60 h-60 rounded-full blur-3xl ${
          isDarkMode 
            ? "bg-gray-600/20" 
            : "bg-yellow-200/10"
        }`} />
      </div>
      {/* Border Lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {/* Left vertical line */}
        <div 
          className={`absolute top-0 bottom-0 w-px border-l-2 border-dashed ${
            isDarkMode ? "border-zinc-700/60" : "border-stone-500/20"
          }`}
          style={{ left: "calc(7rem - 1rem)" }} // left-28 - 1rem padding
        />
        
        {/* Right vertical line */}
        <div 
          className={`absolute top-0 bottom-0 w-px border-l-2 border-dashed ${
            isDarkMode ? "border-zinc-700/60" : "border-stone-500/20"
          }`}
          style={{ left: "calc(7rem + 4rem + 1rem)" }} // left-28 + sidebar width + 1rem padding
        />
        
        {/* Top horizontal line */}
        <div 
          className={`absolute left-0 right-0 h-px border-t-2 border-dashed ${
            isDarkMode ? "border-zinc-700/60" : "border-stone-500/20"
          }`}
          style={{ 
            top: "calc(50% - 35vh - 1rem)" // 50% - half of sidebar height - 1rem padding
          }}
        />
        
        {/* Bottom horizontal line */}
        <div 
          className={`absolute left-0 right-0 h-px border-t-2 border-dashed ${
            isDarkMode ? "border-zinc-700/60" : "border-stone-500/20"
          }`}
          style={{ 
            top: "calc(50% + 35vh + 1rem)" // 50% + half of sidebar height + 1rem padding
          }}
        />
        
        {/* Content area vertical lines */}
        <div 
          className={`absolute top-0 bottom-0 w-px border-l-2 border-dashed ${
            isDarkMode ? "border-zinc-700/50" : "border-stone-500/20"
          }`}
          style={{ left: "calc(4rem + 4rem + 1rem + 20rem)" }} // Right of sidebar + 20rem spacing
        />
        
        <div 
          className={`absolute top-0 bottom-0 w-px border-l-2 border-dashed ${
            isDarkMode ? "border-zinc-700/50" : "border-stone-500/20"
          }`}
          style={{ left: "calc(4rem + 6rem + 1rem + 20rem + 50rem)" }} // Content area width of 50rem
        />
      </div>

      {/* Floating Sidebar for Desktop */}
      <div className="hidden lg:block absolute left-28 top-1/2 transform -translate-y-1/2 z-10">
        <Sidebar
          items={items}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          onItemClick={onItemClick}
        />
      </div>

      {/* Main Content Area */}
      <div 
        className="relative w-full min-h-screen p-4 sm:p-6 pb-20 lg:pb-0 py-8"
      >
        <div className="w-full max-w-4xl mx-auto h-full px-4 lg:px-0 lg:pt-32">
          {children}
        </div>
      </div>

      {/* Sidebar for Mobile (floating, centered) */}
      <div className="block lg:hidden fixed left-1/2 -translate-x-1/2 bottom-4 z-40">
        <Sidebar
          items={items}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          onItemClick={onItemClick}
        />
      </div>
    </div>
  );
};

export default Shell; 