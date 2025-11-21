
import React from 'react';
import { Download, ExternalLink, FileType, HardDrive } from 'lucide-react';
import { FontItem } from '../../types';

interface FontCardProps {
  item: FontItem;
}

export const FontCard: React.FC<FontCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden group hover:border-indigo-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Preview Area */}
      <div className="relative h-40 w-full bg-slate-50 overflow-hidden flex items-center justify-center p-6 shrink-0">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-indigo-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <a 
            href={item.downloadUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-5 py-2.5 bg-white rounded-full font-medium text-indigo-900 hover:bg-indigo-50 shadow-xl"
          >
            <Download size={18} />
            <span>下载字体</span>
          </a>
        </div>
      </div>

      {/* Info Area */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 leading-tight">{item.name}</h3>
            <span className="text-xs text-slate-400 mt-0.5">{item.author}</span>
          </div>
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider
            ${item.isPaid 
              ? 'bg-amber-100 text-amber-700 border border-amber-200' 
              : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
            }`}>
            {item.isPaid ? '付费' : '免费'}
          </span>
        </div>
        
        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4 h-10">
          {item.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium uppercase bg-slate-50 px-1.5 py-0.5 rounded">
                    <FileType size={10} />
                    {item.format}
                </div>
                 <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium uppercase bg-slate-50 px-1.5 py-0.5 rounded">
                    <HardDrive size={10} />
                    {item.size}
                </div>
            </div>

            <a 
            href={item.downloadUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
            详情 <ExternalLink size={12} className="ml-1" />
            </a>
        </div>
      </div>
    </div>
  );
};