
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { AiPromptCard } from './components/cards/AiPromptCard';
import { FontCard } from './components/cards/FontCard';
import { SoftwareCard } from './components/cards/SoftwareCard';
import { ImageViewer } from './components/ImageViewer';
import { CATEGORIES, EXTERNAL_TOOLS, MOCK_AI_PROMPTS, MOCK_FONTS, MOCK_SOFTWARE, BANNER_CONFIG } from './constants';
import { ViewType, AiPromptItem, FontItem, SoftwareItem } from './types';
import { LayoutGrid, ExternalLink, Sun, Calendar } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('ai-prompts');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);

  // Date string generation
  const today = new Date();
  const dateString = today.toLocaleDateString('zh-CN', { weekday: 'long', month: 'short', day: 'numeric' });

  // Reset category when view changes
  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    setActiveCategory('all');
  };

  // Close tools dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter Data logic
  const filteredData = useMemo(() => {
    let data: (AiPromptItem | FontItem | SoftwareItem)[] = [];
    
    switch (currentView) {
      case 'ai-prompts':
        data = MOCK_AI_PROMPTS;
        break;
      case 'fonts':
        data = MOCK_FONTS;
        break;
      case 'software':
        data = MOCK_SOFTWARE;
        break;
    }

    // Filter by Category
    if (activeCategory !== 'all') {
      data = data.filter(item => item.category === activeCategory);
    }

    return data;
  }, [currentView, activeCategory]);

  // Render content based on view type
  const renderContent = () => {
    if (filteredData.length === 0) {
      return (
        <div className="text-center py-20 text-slate-400">
          <p>未找到相关内容</p>
        </div>
      );
    }

    if (currentView === 'software') {
      return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {filteredData.map(item => (
            <SoftwareCard key={item.id} item={item as SoftwareItem} />
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[2000px]:grid-cols-6 gap-4 md:gap-6">
        {filteredData.map(item => {
          if (currentView === 'ai-prompts') {
            return (
              <AiPromptCard 
                key={item.id} 
                item={item as AiPromptItem} 
                onEnlarge={setEnlargedImage} 
              />
            );
          }
          return <FontCard key={item.id} item={item as FontItem} />;
        })}
      </div>
    );
  };

  const currentCategories = CATEGORIES[currentView];
  const banner = BANNER_CONFIG[currentView];

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <Sidebar currentView={currentView} onViewChange={handleViewChange} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full min-w-0 relative">
        {/* Top Bar */}
        <header className="h-16 md:h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-8 flex items-center shrink-0 sticky top-0 z-10 justify-between gap-6">
          
          {/* Greeting / Date Widget */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <Calendar size={12} />
                    <span>{dateString}</span>
                </div>
                {/* Hidden on mobile to save space */}
                <div className="hidden md:flex items-center gap-2 text-slate-800 font-medium mt-0.5">
                    <Sun size={16} className="text-amber-500" />
                    <span>下午好，创造者</span>
                </div>
            </div>
          </div>

          {/* Quick Tools Button */}
          <div className="relative" ref={toolsRef}>
             <button 
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className={`p-2 md:p-2.5 rounded-xl border transition-all duration-200 flex items-center gap-2
                    ${isToolsOpen 
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-600' 
                        : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700 hover:shadow-sm'
                    }`}
                title="工具箱"
             >
                 <LayoutGrid size={20} />
                 <span className="hidden md:inline text-sm font-medium">工具箱</span>
             </button>

             {/* Tools Dropdown */}
             {isToolsOpen && (
                 <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        快捷链接
                    </div>
                    <div className="space-y-1">
                        {EXTERNAL_TOOLS.map((tool) => (
                            <a 
                                key={tool.name}
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors group"
                            >
                                <span>{tool.name}</span>
                                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>
                 </div>
             )}
          </div>
        </header>

        {/* Scrollable Grid Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar scroll-smooth">
          <div className="w-full mx-auto">
            
            {/* Hero Banner */}
            <div className={`relative rounded-3xl p-6 md:p-8 mb-8 overflow-hidden bg-gradient-to-r shadow-sm ${banner.gradient}`}>
                <div className="relative z-10 text-white">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{banner.title}</h1>
                    <p className="text-white/90 text-base md:text-lg font-medium max-w-2xl">
                        {banner.subtitle}
                    </p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 skew-x-12 transform translate-x-12 blur-xl"></div>
                <div className="absolute -bottom-12 -right-12 h-64 w-64 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            {/* Category Filters */}
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar mask-linear pb-1">
                    {currentCategories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`whitespace-nowrap px-3 py-1.5 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 border
                        ${activeCategory === cat.id 
                            ? 'bg-slate-900 border-slate-900 text-white shadow-md' 
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                    >
                        {cat.label}
                    </button>
                    ))}
                </div>
                <span className="text-xs text-slate-400 font-medium shrink-0 ml-2">
                    {filteredData.length} 个资源
                </span>
            </div>
            
            {renderContent()}
            
            <div className="h-12"></div> {/* Bottom spacer */}
          </div>
        </div>
      </main>

      {/* Modal Layer */}
      <ImageViewer 
        isOpen={!!enlargedImage} 
        imageUrl={enlargedImage} 
        onClose={() => setEnlargedImage(null)} 
      />
    </div>
  );
};

export default App;
