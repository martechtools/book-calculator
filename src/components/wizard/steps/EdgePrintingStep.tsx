'use client';

import { useBookStore } from '@/lib/store';
import { SelectableCard } from '@/components/ui/SelectableCard';
import { StepLayout } from '../StepLayout';
import { Palette, Printer } from 'lucide-react';

export function EdgePrintingStep() {
    const { edgePrinting, setEdgePrinting } = useBookStore();

    const Preview = (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="relative mb-6">
                <div className="w-32 h-10 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 border border-gray-300 transform -skew-x-12 shadow-md flex items-center justify-center overflow-hidden">
                    {edgePrinting && (
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-80" />
                    )}
                </div>
                <div className="w-32 h-40 bg-white border-l border-r border-b border-gray-300 transform -skew-x-12 -mt-1 shadow-sm opacity-50 mx-auto" />
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-1">{edgePrinting ? 'Full Bleed Edge' : 'Standard Edge'}</h3>
            <p className="text-xs text-gray-500 max-w-[180px]">
                {edgePrinting ? 'Design extends to the very edge of the book block.' : 'Clean white paper edges.'}
            </p>
        </div>
    );

    return (
        <StepLayout
            title="Edge Printing"
            description="Print visuals on the fore-edge of your book block for a stunning visual effect."
            preview={Preview}
        >
            <div className="grid grid-cols-1 gap-4">
                <SelectableCard
                    selected={!edgePrinting}
                    onClick={() => setEdgePrinting(false)}
                    title="No Edge Printing"
                    description="Standard clean paper edges."
                    price={0}
                    showCheck={true}
                />

                <SelectableCard
                    selected={edgePrinting}
                    onClick={() => setEdgePrinting(true)}
                    title="Edge Printing"
                    description="Add a pattern, text, or image to the page edges."
                    price={5.00}
                    features={['Premium look', 'Custom design']}
                    icon={<Palette className="w-4 h-4 text-purple-500" />}
                    showCheck={true}
                />
            </div>
        </StepLayout>
    );
}
