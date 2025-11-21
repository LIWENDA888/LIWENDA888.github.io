
import React from 'react';
import { ViewType } from '../types';
import { Sparkles, Type, Box, Compass, Home } from 'lucide-react';

interface SidebarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'ai-prompts', label: 'AI 提示词', icon: Sparkles },
    { id: 'fonts', label: '字体库', icon: Type },
    { id: 'software', label: '软件工具', icon: Box },
  ];

  return (
    <div className="w-16 md:w-64 bg-white h-full border-r border-slate-200 flex flex-col justify-between transition-all duration-300 z-20 shadow-sm shrink-0">
      <div>
        <div className="h-20 flex items-center justify-center md:justify-start md:px-6 border-b border-slate-100 overflow-hidden">
          <img 
            src="https://tc.z.wiki/autoupload/f/NWINCyTOTWqNUcPQazQq69iO_OyvX7mIgxFBfDMDErs/20250803/2tE5/219X79/haologo.png" 
            alt="Logo" 
            className="h-6 md:h-10 object-contain max-w-full"
          />
        </div>

        <nav className="p-2 md:p-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id as ViewType)}
                className={`w-full flex items-center justify-center md:justify-start p-3 rounded-xl transition-all duration-200 group
                  ${isActive 
                    ? 'bg-indigo-50 text-indigo-600 shadow-sm ring-1 ring-indigo-100' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
              >
                <Icon size={22} className={isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'} />
                <span className={`ml-3 font-medium hidden md:block ${isActive ? 'text-indigo-700' : ''}`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500 hidden md:block" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-2 md:p-4 border-t border-slate-100 space-y-2">
        <a 
          href="https://www.zizao.top/hao"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center md:justify-start p-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          title="设计导航"
        >
          <Compass size={20} className="text-slate-400" />
          <span className="ml-3 font-medium hidden md:block">设计导航</span>
        </a>
        <a 
          href="https://www.zizao.top"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center md:justify-start p-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          title="返回首页"
        >
          <Home size={20} className="text-slate-400" />
          <span className="ml-3 font-medium hidden md:block">返回首页</span>
        </a>
      </div>
    </div>
  );
};
