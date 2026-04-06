"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tag } from 'lucide-react';

interface ChipOption {
  id: string;
  label: string;
}

const CATEGORY_OPTIONS: ChipOption[] = [
  { id: 'all', label: 'All Collections' },
  { id: 'cyberpunk', label: 'Cyberpunk' },
  { id: 'lofi', label: 'Lo-Fi Chill' },
  { id: 'mecha', label: 'Mecha Classics' },
  { id: 'shonen', label: 'Shonen Action' },
];

export function ActionChips() {
  const [selectedId, setSelectedId] = useState('all');

  return (
    <section className="px-8 md:px-16 lg:px-32 max-w-[1600px] mx-auto py-12">
      <div className="flex flex-col gap-6 border-b border-surface-container pb-12">
        <h2 className="text-xl font-bold text-on-surface flex items-center gap-2">
          <Tag className="w-5 h-5 text-primary" />
          Browse the Archives
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {CATEGORY_OPTIONS.map((option) => {
            const isSelected = selectedId === option.id;
            
            return (
              <button
                key={option.id}
                onClick={() => setSelectedId(option.id)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 shadow-sm",
                  isSelected
                    ? "bg-primary-fixed text-on-primary-fixed"
                    : "bg-surface-container-lowest border border-outline-variant/15 text-on-surface hover:bg-surface-container-low"
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
