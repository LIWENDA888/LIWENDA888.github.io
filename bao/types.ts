export type ViewType = 'ai-prompts' | 'fonts' | 'software';

export interface Category {
  id: string;
  label: string;
}

export interface BaseItem {
  id: string;
  category: string;
  imageUrl: string;
}

export interface AiPromptItem extends BaseItem {
  type: 'ai-prompts';
  prompt: string;
  title: string;
  model: string;
  tags: string[];
}

export interface FontItem extends BaseItem {
  type: 'fonts';
  name: string;
  author: string;
  isPaid: boolean;
  description: string;
  downloadUrl: string;
  format: string;
  size: string;
}

export interface SoftwareItem extends BaseItem {
  type: 'software';
  title: string;
  description: string;
  version: string;
  downloads: { label: string; url: string }[];
}

export type AssetItem = AiPromptItem | FontItem | SoftwareItem;