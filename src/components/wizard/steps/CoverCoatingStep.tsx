'use client';

import { useBookStore } from '@/lib/store';
import { COVER_COATINGS } from '@/lib/constants';
import { SelectableCard } from '@/components/ui/SelectableCard';
import { StepLayout } from '../StepLayout';
import { SprayCan, Sparkles, Ban } from 'lucide-react';

export function CoverCoatingStep() {
    const { coverCoating, setCoverCoating } = useBookStore();

    const selectedCoating = COVER_COATINGS.find(c => c.id === coverCoating);

    const Preview = (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="relative mb-6">
                <div className={`w-32 h-44 border border-gray-200 shadow-lg rounded-sm flex items-center justify-center relative transition-all duration-500 overflow-hidden ${coverCoating === 'gloss-uv' || coverCoating === 'hi-gloss'
                        ? 'bg-white after:absolute after:inset-0 after:bg-gradient-to-tr after:from-transparent after:via-white/80 after:to-transparent after:-translate-x-full hover:after:translate-x-full after:transition-transform after:duration-1000'
                        : 'bg-gray-50'
                    }`}>
                    {/* Visual representation of finish */}
                    {coverCoating === 'silk-laminate' && (
                        <div className="absolute inset-0 bg-gray-900/5 backdrop-blur-[1px]" />
                    )}

                    <div className="p-4 text-center z-10">
                        <span className="text-2xl font-serif text-gray-900 font-bold italic">B</span>
                    </div>
                </div>
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-1">{selectedCoating?.name}</h3>
            <p className="text-xs text-gray-500">
                {coverCoating.includes('gloss') ? 'High Shine Finish' : 'Soft Touch Matte'}
            </p>
        </div>
    );

    return (
        <StepLayout
            title="Cover Finish"
            description="Protect your book and enhance its look with a professional coating."
            preview={Preview}
        >
            <div className="grid grid-cols-1 gap-4">
                {COVER_COATINGS.map((coating) => {
                    const isSelected = coverCoating === coating.id;
                    const Icon = coating.id.includes('gloss') ? Sparkles : coating.id.includes('silk') ? SprayCan : Ban;

                    return (
                        <SelectableCard
                            key={coating.id}
                            selected={isSelected}
                            onClick={() => setCoverCoating(coating.id)}
                            title={coating.name}
                            price={coating.pricePerBook}
                            icon={<Icon className="w-5 h-5 text-gray-400" />}
                            showCheck={true}
                        />
                    );
                })}
            </div>
        </StepLayout>
    );
}
