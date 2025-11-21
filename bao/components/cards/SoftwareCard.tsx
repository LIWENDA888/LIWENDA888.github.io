
import React from 'react';
import { DownloadCloud } from 'lucide-react';
import { SoftwareItem } from '../../types';

interface SoftwareCardProps {
  item: SoftwareItem;
}

export const SoftwareCard: React.FC<SoftwareCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-6">
      {/* Left: Cover Image */}
      <div className="w-full md:w-48 h-48 shrink-0 bg-slate-100 rounded-xl overflow-hidden border border-slate-100 relative group">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-2 left-2">
             <div className="bg-white/90 backdrop-blur rounded-md px-2 py-1 text-xs font-bold text-slate-700 shadow-sm border border-slate-200">
                v{item.version}
             </div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-start justify-between mb-2">
            <div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2 max-w-xl leading-relaxed">
                {item.description}
                </p>
            </div>
        </div>

        <div className="mt-auto pt-4">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">下载链接</h4>
          <div className="flex flex-wrap gap-2">
            {item.downloads.map((dl, idx) => (
              <a
                key={idx}
                href={dl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white hover:border-indigo-200 hover:text-indigo-600 transition-all duration-200 text-xs font-medium text-slate-600 shadow-sm hover:shadow"
              >
                <DownloadCloud size={12} />
                {dl.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
