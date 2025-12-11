'use client';

import { useBookStore } from '@/lib/store';
import { COVER_DESIGN_OPTIONS } from '@/lib/constants';
import { SelectableCard } from '@/components/ui/SelectableCard';
import { StepLayout } from '../StepLayout';
import { Image as ImageIcon, Paintbrush } from 'lucide-react';

export function CoverDesignStep() {
    const { coverDesign, setCoverDesign } = useBookStore();

    const selectedDesign = COVER_DESIGN_OPTIONS.find(d => d.id === coverDesign);

    const Preview = (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-32 h-44 bg-gray-900 border border-gray-800 shadow-lg mb-6 relative overflow-hidden">
                {/* Cover Art Placeholder */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500 to-purple-600" />

                {coverDesign !== 'none' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Paintbrush className="w-12 h-12 text-white/50" />
                    </div>
                )}

                <div className="absolute bottom-4 left-0 right-0 text-white text-[8px] text-center tracking-widest px-2">
                    THE GREAT NOVEL
                </div>
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-1">{selectedDesign?.name}</h3>
            <p className="text-xs text-gray-500 max-w-[200px]">
                {coverDesign === 'none' ? 'You provide the full cover PDF.' : 'We design a custom cover for you.'}
            </p>
        </div>
    );

    return (
        <StepLayout
            title="Cover Design"
            description="A great book needs a great cover. Upload your own or let our designers create one."
            preview={Preview}
        >
            <div className="grid grid-cols-1 gap-3">
                {COVER_DESIGN_OPTIONS.map((option) => (
                    <SelectableCard
                        key={option.id}
                        selected={coverDesign === option.id}
                        onClick={() => setCoverDesign(option.id)}
                        title={option.name}
                        description={option.id === 'none' ? 'I have a print-ready PDF cover' : 'Professional cover design'}
                        price={option.price}
                        icon={option.id !== 'none' ? <ImageIcon className="w-4 h-4 text-purple-500" /> : undefined}
                        showCheck={true}
                    />
                ))}
            </div>
        </StepLayout>
    );
}
