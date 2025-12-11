'use client';

import { useBookStore } from '@/lib/store';
import { PRINTED_PROOF_PRICE } from '@/lib/constants';
import { SelectableCard } from '@/components/ui/SelectableCard';
import { StepLayout } from '../StepLayout';
import { Send, FileCheck } from 'lucide-react';

export function PrintedProofStep() {
    const { printedProof, setPrintedProof } = useBookStore();

    const Preview = (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="mb-6 relative">
                <div className={`w-32 h-40 bg-white border shadow-sm flex items-center justify-center transition-all ${printedProof ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
                    }`}>
                    {printedProof ? (
                        <div className="relative w-full h-full p-4 flex flex-col justify-between">
                            <div className="w-16 h-2 bg-gray-100 rounded-full" />
                            <div className="space-y-2">
                                <div className="w-full h-2 bg-gray-100 rounded-full" />
                                <div className="w-full h-2 bg-gray-100 rounded-full" />
                                <div className="w-2/3 h-2 bg-gray-100 rounded-full" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500 opacity-50 font-bold rotate-[-15deg] border-2 border-blue-500 rounded-md p-1 px-2 text-xs uppercase">
                                Proof Copy
                            </div>
                        </div>
                    ) : (
                        <FileCheck className="w-12 h-12 text-gray-300" />
                    )}
                </div>
                {printedProof && (
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-full shadow-md">
                        <Send className="w-4 h-4" />
                    </div>
                )}
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-1">
                {printedProof ? 'Hard Copy Proof' : 'Digital Proof Only'}
            </h3>
            <p className="text-xs text-gray-500 max-w-[200px]">
                {printedProof
                    ? 'A physical copy shipped to you for final approval.'
                    : 'A PDF proof for your review on screen.'}
            </p>
        </div>
    );

    return (
        <StepLayout
            title="Printed Proof"
            description="Would you like to see a physical copy of your book before we print the full order?"
            preview={Preview}
        >
            <div className="grid grid-cols-1 gap-4">
                <SelectableCard
                    selected={!printedProof}
                    onClick={() => setPrintedProof(false)}
                    title="Digital Proof Only"
                    description="We will email you a PDF proof to approve before printing. Faster turnaround."
                    price={0}
                    icon={<FileCheck className="w-5 h-5 text-gray-400" />}
                    showCheck={true}
                />

                <SelectableCard
                    selected={printedProof}
                    onClick={() => setPrintedProof(true)}
                    title="Hard Copy Printed Proof"
                    description="We will print and ship one bound copy of your book for you to review physically."
                    price={PRINTED_PROOF_PRICE}
                    features={['Physical verification', 'Check colors & binding', 'Peace of mind']}
                    icon={<Send className="w-5 h-5 text-blue-500" />}
                    showCheck={true}
                />
            </div>
        </StepLayout>
    );
}
