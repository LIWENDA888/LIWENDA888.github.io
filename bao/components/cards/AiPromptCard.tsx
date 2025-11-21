
import React, { useState } from 'react';
import { Copy, Maximize2, Check, Wand2, Hash } from 'lucide-react';
import { AiPromptItem } from '../../types';

interface AiPromptCardProps {
  item: AiPromptItem;
  onEnlarge: (url: string) => void;
}

export const AiPromptCard: React.FC<AiPromptCardProps> = ({ item, onEnlarge }) => {
  const [promptText, setPromptText] = useState(item.prompt);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300 group h-full">
      {/* Image Area */}
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden shrink-0">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          <button 
            onClick={() => onEnlarge(item.imageUrl)}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white text-slate-700 hover:text-indigo-600 transition-colors"
            title="放大图片"
          >
            <Maximize2 size={16} />
          </button>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10 flex items-center gap-1.5">
            <Wand2 size={10} className="text-indigo-300" />
            {item.model}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-3">
             <h3 className="font-semibold text-slate-800 truncate">{item.title}</h3>
        </div>
        
        {/* Prompt Edit Area */}
        <div className="flex flex-col bg-slate-50 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-300 transition-all overflow-hidden mb-3">
          
          {/* Toolbar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-white/50">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">提示词</span>
             <button 
                onClick={handleCopy}
                className={`flex items-center gap-1.5 text-xs font-medium transition-colors duration-200
                  ${copied 
                    ? 'text-emerald-600' 
                    : 'text-slate-400 hover:text-indigo-600'
                  }`}
              >
                {copied ? (
                  <>
                    <Check size={12} />
                    <span>已复制</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>复制</span>
                  </>
                )}
              </button>
          </div>

          {/* Text Area */}
          <textarea
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            className="w-full bg-transparent border-none resize-none p-3 text-sm text-slate-600 focus:ring-0 custom-scrollbar leading-relaxed h-[80px]"
            placeholder="Enter prompt here..."
          />
        </div>

        {/* Tags */}
        <div className="mt-auto flex items-center gap-2 overflow-hidden flex-wrap">
            {item.tags?.map((tag, idx) => (
                <span key={idx} className="text-[10px] px-2 py-1 rounded-md bg-slate-100 text-slate-500 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-default">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};