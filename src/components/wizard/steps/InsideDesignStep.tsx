'use client';

import { useBookStore } from '@/lib/store';
import { INSIDE_DESIGN_OPTIONS } from '@/lib/constants';
import { SelectableCard } from '@/components/ui/SelectableCard';
import { StepLayout } from '../StepLayout';
import { AlignLeft, LayoutTemplate } from 'lucide-react';

export function InsideDesignStep() {
    const { insideDesign, setInsideDesign } = useBookStore();

    const selectedDesign = INSIDE_DESIGN_OPTIONS.find(d => d.id === insideDesign);

    const Preview = (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-32 h-44 bg-white border border-gray-200 shadow-sm mb-6 p-4 flex flex-col gap-2">
                {/* Skeleton Content */}
                <div className="w-full h-8 bg-gray-100 rounded-sm" />
                <div className="flex gap-2">
                    <div className="w-1/2 h-20 bg-gray-50 rounded-sm" />
                    <div className="w-1/2 space-y-2">
                        <div className="w-full h-2 bg-gray-100" />
                        <div className="w-full h-2 bg-gray-100" />
                        <div className="w-2/3 h-2 bg-gray-100" />
                    </div>
                </div>
                {insideDesign !== 'none' && (
                    <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center backdrop-blur-[1px]">
                        <div className="bg-white p-2 rounded-full shadow-sm">
                            <LayoutTemplate className="w-6 h-6 text-blue-500" />
                        </div>
                    </div>
                )}
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-1">{selectedDesign?.name}</h3>
            <p className="text-xs text-gray-500 max-w-[200px]">
                {insideDesign === 'none' ? 'You provide print-ready PDFs.' : 'We help format your manuscript.'}
            </p>
        </div>
    );

    return (
        <StepLayout
            title="Inside Page Design"
            description="Need help formatting your book's interior? Our team can typeset your manuscript."
            preview={Preview}
        >
            <div className="grid grid-cols-1 gap-3">
                {INSIDE_DESIGN_OPTIONS.map((option) => (
                    <SelectableCard
                        key={option.id}
                        selected={insideDesign === option.id}
                        onClick={() => setInsideDesign(option.id)}
                        title={option.name}
                        description={option.id === 'none' ? 'I have print-ready files' : 'Professional formatting service'}
                        price={option.price}
                        icon={option.id !== 'none' ? <AlignLeft className="w-4 h-4 text-blue-500" /> : undefined}
                        showCheck={true}
                    />
                ))}
            </div>
        </StepLayout>
    );
}
