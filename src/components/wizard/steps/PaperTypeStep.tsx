'use client';

import { useBookStore } from '@/lib/store';
import { PAPER_TYPES } from '@/lib/constants';
import { SelectableCard } from '@/components/ui/SelectableCard';
import { StepLayout } from '../StepLayout';
import { motion } from 'framer-motion';
import { ScrollText, Check } from 'lucide-react';

export function PaperTypeStep() {
    const { paperType, setPaperType } = useBookStore();

    // Helper to find current paper object
    const findPaper = (id: string) => {
        const offset = PAPER_TYPES.offset.find(p => p.id === id);
        if (offset) return offset;
        return PAPER_TYPES.coated.find(p => p.id === id);
    };

    const selectedPaper = findPaper(paperType);

    const Preview = (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="relative mb-6 group">
                <div className="w-32 h-44 bg-white border border-gray-200 shadow-md flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105 duration-500">
                    {/* Texture simulation */}
                    {paperType.includes('coated') ? (
                        <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/50 to-transparent opacity-60" />
                    ) : (
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')]" />
                    )}
                    <ScrollText className="text-gray-200 w-12 h-12 relative z-10" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gray-900 text-white p-1.5 rounded-full shadow-sm">
                    <Check className="w-4 h-4" />
                </div>
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-1">{selectedPaper?.name}</h3>
            <p className="text-xs text-gray-500 max-w-[180px]">
                {selectedPaper?.tag || 'Standard Option'}
            </p>
        </div>
    );

    return (
        <StepLayout
            title="Paper Type"
            description="Select the paper stock for your book's interior pages. Standard or premium options available."
            preview={Preview}
        >
            <div className="space-y-8">
                {/* Offset Papers */}
                <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest pl-1">Standard (Offset)</h4>
                    <div className="grid grid-cols-1 gap-3">
                        {PAPER_TYPES.offset.map((paper) => (
                            <SelectableCard
                                key={paper.id}
                                selected={paperType === paper.id}
                                onClick={() => setPaperType(paper.id)}
                                title={paper.name}
                                subtitle={`${paper.ppi} PPI`}
                                price={paper.pricePerBook}
                                features={paper.tag ? [paper.tag] : []}
                                showCheck={true}
                            />
                        ))}
                    </div>
                </div>

                {/* Coated Papers */}
                <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest pl-1">Premium (Coated)</h4>
                    <div className="grid grid-cols-1 gap-3">
                        {PAPER_TYPES.coated.map((paper) => (
                            <SelectableCard
                                key={paper.id}
                                selected={paperType === paper.id}
                                onClick={() => setPaperType(paper.id)}
                                title={paper.name}
                                subtitle={`${paper.ppi} PPI`}
                                price={paper.pricePerBook}
                                features={paper.tag ? [paper.tag] : []}
                                showCheck={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </StepLayout>
    );
}
